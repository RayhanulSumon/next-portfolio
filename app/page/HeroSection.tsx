"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import React, { useRef, useEffect, useState, MouseEvent } from 'react';
import { Mesh, SphereGeometry, Material, MeshStandardMaterial } from 'three';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { motion as motionLink } from 'framer-motion';

interface DistortMaterial extends Material {
  distort: number;
}

function Hero3DBackground() {
  // Only render Canvas after hydration
  const [isClient, setIsClient] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use a ref for scrollY to avoid re-rendering
  const scrollYRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function AnimatedSphere() {
    const ref = useRef<Mesh<SphereGeometry, Material>>(null);
    const yPos = useRef(-0.7);
    useFrame(() => {
      if (ref.current) {
        // Set color based on theme
        const color = isDark ? '#0ea5e9' : '#0284c7';
        const opacity = isDark ? 0.7 : 0.85;
        (ref.current.material as DistortMaterial).distort = 0.15 + Math.sin(Date.now() * 0.001) * 0.07;
        // Type guard for color property
        const mat = ref.current.material as MeshStandardMaterial;
        if (mat && mat.color && typeof mat.color.set === 'function') {
          mat.color.set(color);
        }
        if ('opacity' in mat) {
          mat.opacity = opacity;
        }
        const minY = -0.7; // start at bottom of hero
        const maxY = 2.5; // move further down as you scroll (increase for more movement)
        // Use a fallback value for SSR
        const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const scrollRatio = typeof window !== 'undefined' ? Math.min(scrollYRef.current / heroHeight, 1) : 0;
        const targetY = minY + (maxY - minY) * scrollRatio;
        yPos.current += (targetY - yPos.current) * 0.08;
        ref.current.position.y = yPos.current;
      }
    });
    return (
      <Sphere ref={ref} args={[0.6, 64, 64]} scale={0.9} position={[0.7, yPos.current, 0]}>
        <MeshDistortMaterial color={isDark ? '#0ea5e9' : '#0284c7'} speed={1.2} transparent opacity={isDark ? 0.7 : 0.85} />
      </Sphere>
    );
  }

  // Only render Canvas on client
  if (!isClient) return null;

  // Adjust background opacity based on theme
  const isDark = resolvedTheme === 'dark';
  const bgOpacity = isDark ? 0.45 : 0.25;

  return (
    <div className="absolute left-0 right-0 top-0 h-screen pointer-events-none" style={{ filter: 'blur(10px)', opacity: bgOpacity }}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={isDark ? 0.7 : 0.5} />
        <directionalLight position={[2, 2, 2]} intensity={isDark ? 0.5 : 0.3} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}

export default function HeroSection() {
  // Force scroll to top on initial load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  // 3D tilt effect state/logic
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const maxTilt = 25; // reduced for subtler effect

  function handlePointerMove(e: MouseEvent<HTMLDivElement>) {
    const node = tiltRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    // Centered at 0,0
    const tiltX = (py - 0.5) * -2 * maxTilt;
    const tiltY = (px - 0.5) * 2 * maxTilt;
    setTilt({ x: tiltX, y: tiltY, scale: 1.08 });
  }
  function handlePointerLeave() {
    setTilt({ x: 0, y: 0, scale: 1 });
  }
  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const node = tiltRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const touch = e.touches[0];
    if (!touch) return;
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const tiltX = (py - 0.5) * -2 * maxTilt;
    const tiltY = (px - 0.5) * 2 * maxTilt;
    setTilt({ x: tiltX, y: tiltY, scale: 1.08 });
  }
  function handleTouchEnd() {
    setTilt({ x: 0, y: 0, scale: 1 });
  }

  return (
    <motion.section
      id="hero"
      className="min-h-[calc(100svh-64px)] md:min-h-[calc(100vh-64px)] flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero3DBackground />
      <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10">
        <motion.div
          className="flex-shrink-0 flex justify-center items-center w-full lg:w-auto order-1 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <motion.div
            ref={tiltRef}
            className="relative group rounded-3xl p-3 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 dark:from-blue-800 dark:via-cyan-700 dark:to-blue-900 shadow-2xl"
            style={{
              perspective: 1000,
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Ultra-subtle premium border */}
            <span className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-500/5 via-cyan-400/5 to-blue-600/5 dark:from-blue-400/8 dark:via-cyan-300/8 dark:to-blue-500/8 blur-sm group-hover:blur-sm group-hover:from-blue-500/12 group-hover:via-cyan-400/12 group-hover:to-blue-600/12 dark:group-hover:from-blue-400/15 dark:group-hover:via-cyan-300/15 dark:group-hover:to-blue-500/15 transition-all duration-700" />

            <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl border border-white/95 dark:border-slate-800/95 group-hover:border-blue-100/30 dark:group-hover:border-cyan-500/20 group-hover:shadow-blue-500/10 dark:group-hover:shadow-cyan-400/10 transition-all duration-700 relative z-10">
              <Image
                src="/images/hero/sumon.webp"
                alt="Rayhanul Sumon"
                width={400}
                height={400}
                className="object-cover w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center lg:text-left max-w-3xl order-2 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 100 }}
        >
          {/* Enhanced greeting */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for new projects</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Hi, I&apos;m{' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Rayhanul Sumon
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 dark:text-cyan-300 mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            I&apos;m passionate about creating amazing digital experiences with{' '}
            <span className='font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-default'>React</span>,{' '}
            <span className='font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-default'>Next.js</span>,{' '}
            <span className='font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-default'>Laravel</span>, and modern web technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="/contact" className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let&apos;s Talk
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group relative"
            >
              <motion.a
                href="/images/cv.webp"
                download
                className="relative flex items-center justify-center gap-3 px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 rounded-xl font-bold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-cyan-400 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Tech stack preview */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Tech Stack:</span>
            {['React', 'Next.js', 'TypeScript', 'Laravel', 'Node.js'].map((tech, idx) => (
              <motion.span
                key={tech}
                className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}