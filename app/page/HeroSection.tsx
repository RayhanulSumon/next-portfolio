"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import React, { useRef, useEffect, useState, MouseEvent } from 'react';
import { Mesh, SphereGeometry, Material, MeshStandardMaterial } from 'three';
import { useTheme } from 'next-themes';

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
        const color = resolvedTheme === 'dark' ? '#0ea5e9' : '#38bdf8';
        (ref.current.material as DistortMaterial).distort = 0.15 + Math.sin(Date.now() * 0.001) * 0.07;
        // Type guard for color property
        const mat = ref.current.material as MeshStandardMaterial;
        if (mat && mat.color && typeof mat.color.set === 'function') {
          mat.color.set(color);
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
        <MeshDistortMaterial color={resolvedTheme === 'dark' ? '#0ea5e9' : '#38bdf8'} speed={1.2} transparent opacity={0.7} />
      </Sphere>
    );
  }

  // Only render Canvas on client
  if (!isClient) return null;

  return (
    <div className="absolute left-0 right-0 top-0 h-screen pointer-events-none" style={{ filter: 'blur(10px)', opacity: resolvedTheme === 'dark' ? 0.45 : 0.35 }}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={resolvedTheme === 'dark' ? 0.7 : 0.5} />
        <directionalLight position={[2, 2, 2]} intensity={resolvedTheme === 'dark' ? 0.5 : 0.3} />
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
  const maxTilt = 35; // degrees (increased for more 3D effect)

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
    setTilt({ x: tiltX, y: tiltY, scale: 1.12 });
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
    setTilt({ x: tiltX, y: tiltY, scale: 1.12 });
  }
  function handleTouchEnd() {
    setTilt({ x: 0, y: 0, scale: 1 });
  }

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-100 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Hero3DBackground />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        <motion.div
          className="flex-shrink-0 flex justify-center items-center w-full md:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <motion.div
            ref={tiltRef}
            className="relative group rounded-3xl p-2 bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-700 dark:from-blue-900 dark:via-cyan-800 dark:to-blue-950 shadow-2xl"
            style={{
              perspective: 1000,
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
              transition: 'transform 0.25s cubic-bezier(.23,1.01,.32,1)',
            }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Subtle animated ring effect with hover state */}
            <span className="absolute -inset-[0px] sm:-inset-0.5 rounded-3xl z-0 animate-hero-ring bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-700 dark:from-blue-900 dark:via-cyan-800 dark:to-blue-950 blur-[1px] opacity-10 group-hover:blur-xs group-hover:opacity-20 group-hover:animate-hero-ring-fast transition-all duration-300" />
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl border-2 md:border-4 border-white dark:border-slate-800 group-hover:shadow-blue-900/40 dark:group-hover:shadow-cyan-500/40 group-hover:scale-110 transition-all duration-300 relative z-10">
              <Image
                src="/images/hero/sumon.webp"
                alt="Rayhanul Sumon"
                width={320}
                height={320}
                className="object-cover w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
                priority
              />
            </div>
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-700 dark:from-blue-900 dark:via-cyan-800 dark:to-blue-950 blur-none opacity-0 group-hover:opacity-10 transition-all duration-300 z-[-1]" />
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-300 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
            Hi, I&apos;m <span className="inline-block">Rayhanul Sumon</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 dark:text-cyan-300 mb-3 tracking-wide leading-snug">
            Full Stack Web Developer
          </h2>
          <p className="prose prose-blue dark:prose-invert text-base sm:text-lg md:text-xl font-normal text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m passionate about creating amazing digital experiences with <span className='font-semibold text-blue-600 dark:text-cyan-400'>React</span>, <span className='font-semibold text-blue-600 dark:text-cyan-400'>Next.js</span>, <span className='font-semibold text-blue-600 dark:text-cyan-400'>Laravel</span>, and modern web technologies. I love building fast, accessible, and beautiful web apps.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-2.5 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-bold shadow hover:bg-blue-700 dark:hover:bg-blue-800 transition text-base sm:text-lg tracking-wide"
            >Contact Me</motion.a>
            <motion.a
              href="/images/cv.webp" download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-2.5 bg-cyan-500 dark:bg-cyan-600 text-white rounded-lg font-bold shadow hover:bg-cyan-600 dark:hover:bg-cyan-700 transition text-base sm:text-lg tracking-wide"
            >Download CV</motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}