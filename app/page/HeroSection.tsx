"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import React, { useRef, useEffect, useState, MouseEvent, useCallback, useMemo } from 'react';
import { Mesh, SphereGeometry, Material, MeshStandardMaterial } from 'three';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

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

  // Use a ref for scrollY to avoid re-rendering - optimized with requestAnimationFrame
  const scrollYRef = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId.current = requestAnimationFrame(() => {
          scrollYRef.current = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Memoize the sphere component for better performance
  const AnimatedSphere = useMemo(() => {
    function SphereComponent() {
      const ref = useRef<Mesh<SphereGeometry, Material>>(null);
      const yPos = useRef(-0.7);
      const time = useRef(0);

      useFrame((state, delta) => {
        if (ref.current) {
          time.current += delta;

          // Optimize animation calculations
          const isDark = resolvedTheme === 'dark';
          const color = isDark ? '#0ea5e9' : '#0284c7';
          const opacity = isDark ? 0.7 : 0.85;

          // Use time-based animation instead of Date.now() for better performance
          (ref.current.material as DistortMaterial).distort = 0.15 + Math.sin(time.current * 1000) * 0.07;

          // Type guard for color property
          const mat = ref.current.material as MeshStandardMaterial;
          if (mat && mat.color && typeof mat.color.set === 'function') {
            mat.color.set(color);
          }
          if ('opacity' in mat) {
            mat.opacity = opacity;
          }

          const minY = -0.7;
          const maxY = 2.5;
          const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
          const scrollRatio = typeof window !== 'undefined' ? Math.min(scrollYRef.current / heroHeight, 1) : 0;
          const targetY = minY + (maxY - minY) * scrollRatio;

          // Smooth interpolation for better performance
          yPos.current += (targetY - yPos.current) * 0.08;
          ref.current.position.y = yPos.current;
        }
      });

      return (
        <mesh ref={ref} scale={0.9} position={[0.7, yPos.current, 0]}>
          <sphereGeometry args={[0.6, 64, 64]} />
          <MeshDistortMaterial
            color={resolvedTheme === 'dark' ? '#0ea5e9' : '#0284c7'}
            speed={1.2}
            transparent
            opacity={resolvedTheme === 'dark' ? 0.7 : 0.85}
          />
        </mesh>
      );
    }
    return SphereComponent;
  }, [resolvedTheme]);

  // Only render Canvas on client
  if (!isClient) return null;

  // Memoize theme-based values
  const isDark = resolvedTheme === 'dark';
  const bgOpacity = isDark ? 0.45 : 0.25;
  const ambientIntensity = isDark ? 0.7 : 0.5;
  const directionalIntensity = isDark ? 0.5 : 0.3;

  return (
    <div
      className="absolute left-0 right-0 top-0 h-screen pointer-events-none will-change-transform"
      style={{
        filter: 'blur(10px)',
        opacity: bgOpacity,
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]} // Limit device pixel ratio for better performance
        performance={{ min: 0.5 }} // Performance settings
      >
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[2, 2, 2]} intensity={directionalIntensity} />
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

  // 3D tilt effect state/logic with performance optimizations
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const isAnimating = useRef(false);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const maxTilt = isMobile ? 15 : 45;
  const lastTouchTime = useRef(0);

  // Memoize style calculations for better performance
  const tiltStyles = useMemo(() => {
    const tiltIntensity = Math.abs(tilt.x) + Math.abs(tilt.y);

    return {
      container: {
        perspective: 2000,
        transformStyle: 'preserve-3d' as const,
        transform: `perspective(2000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
        transition: tilt.scale === 1
          ? 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          : 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)',
        willChange: 'transform',
        filter: `drop-shadow(${tilt.y * 0.5}px ${tilt.x * 0.5 + 20}px ${20 + tiltIntensity}px rgba(59, 130, 246, ${0.3 + tiltIntensity * 0.01}))`,
      },
      layer1: {
        transform: `translateZ(-10px) scale(${1 + tiltIntensity * 0.001})`,
        opacity: 0.6 + tiltIntensity * 0.005,
      },
      layer2: {
        transform: `translateZ(-20px) scale(${1 + tiltIntensity * 0.002})`,
        opacity: 0.4 + tiltIntensity * 0.008,
      },
      layer3: {
        transform: `translateZ(-30px) scale(${1 + tiltIntensity * 0.003})`,
        opacity: 0.2 + tiltIntensity * 0.01,
      },
      imageContainer: {
        transform: 'translateZ(0)',
        boxShadow: `
          0 ${4 + Math.abs(tilt.x) * 0.5}px ${20 + Math.abs(tilt.y) * 0.8}px rgba(0, 0, 0, ${0.1 + tiltIntensity * 0.003}),
          0 1px 3px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          ${tilt.y * 0.3}px ${tilt.x * 0.3}px ${15 + tiltIntensity}px rgba(59, 130, 246, ${0.2 + tiltIntensity * 0.005})
        `
      },
      lighting: {
        background: `
          radial-gradient(
            circle at ${50 + tilt.y * 0.5}% ${50 - tilt.x * 0.5}%, 
            rgba(255, 255, 255, ${0.15 + tiltIntensity * 0.002}) 0%, 
            rgba(255, 255, 255, 0.05) 40%, 
            rgba(0, 0, 0, ${0.05 + tiltIntensity * 0.001}) 100%
          )
        `,
      },
      image: {
        transform: `translateZ(10px) scale(${1 + tiltIntensity * 0.0005})`,
        filter: `brightness(${1 + tiltIntensity * 0.001}) contrast(${1 + tiltIntensity * 0.0008})`,
      }
    };
  }, [tilt.x, tilt.y, tilt.scale]);

  // Throttled pointer move handler for better performance
  const handlePointerMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    requestAnimationFrame(() => {
      const node = tiltRef.current;
      if (!node) {
        isAnimating.current = false;
        return;
      }
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;
      const tiltX = (py - 0.5) * -2 * maxTilt;
      const tiltY = (px - 0.5) * 2 * maxTilt;
      setTilt({ x: tiltX, y: tiltY, scale: 1.15 });
      isAnimating.current = false;
    });
  }, [maxTilt]);

  const handlePointerLeave = useCallback(() => {
    setTilt({ x: 0, y: 0, scale: 1 });
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastTouchTime.current < 16) return; // throttle to ~60fps
    lastTouchTime.current = now;
    if (isAnimating.current) return;
    isAnimating.current = true;
    requestAnimationFrame(() => {
      const node = tiltRef.current;
      if (!node) {
        isAnimating.current = false;
        return;
      }
      const rect = node.getBoundingClientRect();
      const touch = e.touches[0];
      if (!touch) {
        isAnimating.current = false;
        return;
      }
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const px = x / rect.width;
      const py = y / rect.height;
      const tiltX = (py - 0.5) * -2 * maxTilt;
      const tiltY = (px - 0.5) * 2 * maxTilt;
      setTilt({ x: tiltX, y: tiltY, scale: 1.10 }); // slightly less scale for mobile
      isAnimating.current = false;
    });
  }, [maxTilt]);

  const handleTouchEnd = useCallback(() => {
    setTilt({ x: 0, y: 0, scale: 1 });
  }, []);

  // Memoize tech stack items for performance
  const techStack = useMemo(() => ['React', 'Next.js', 'TypeScript', 'Laravel', 'Node.js'], []);

  return (
    <motion.section
      id="hero"
      className="min-h-[calc(100svh-64px)] md:min-h-[calc(100vh-64px)] flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero3DBackground />
      <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 relative z-10 mt-4 md:mt-0">
        <motion.div
          className="flex-shrink-0 flex justify-center items-center w-full lg:w-auto order-1 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <motion.div
            ref={tiltRef}
            className="relative group rounded-3xl p-1 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 dark:from-blue-800 dark:via-cyan-700 dark:to-blue-900 shadow-2xl will-change-transform"
            style={tiltStyles.container}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Enhanced 3D layered border effects with depth - optimized */}
            <div
              className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-blue-400/30 via-cyan-300/30 to-blue-500/30 dark:from-blue-600/40 dark:via-cyan-500/40 dark:to-blue-700/40 blur-sm group-hover:blur-lg transition-all duration-700 will-change-transform"
              style={tiltStyles.layer1}
            />
            <div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-blue-600/20 dark:from-blue-700/30 dark:via-cyan-600/30 dark:to-blue-800/30 blur-md group-hover:blur-xl transition-all duration-700 will-change-transform"
              style={tiltStyles.layer2}
            />
            <div
              className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-blue-700/10 dark:from-blue-800/20 dark:via-cyan-700/20 dark:to-blue-900/20 blur-lg group-hover:blur-2xl transition-all duration-700 will-change-transform"
              style={tiltStyles.layer3}
            />

            <div
              className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl relative z-10 group-hover:shadow-blue-500/30 dark:group-hover:shadow-cyan-400/30 transition-all duration-500"
              style={tiltStyles.imageContainer}
            >
              {/* Dynamic lighting overlay based on tilt - optimized */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
                style={tiltStyles.lighting}
              />
              <Image
                src="/images/hero/sumon.webp"
                alt="Rayhanul Sumon"
                width={400}
                height={400}
                className="object-cover w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 transition-all duration-500 group-hover:scale-110 relative z-10"
                style={tiltStyles.image}
                priority
                loading="eager"
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
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-base px-4 py-2 md:text-lg md:px-6 md:py-4"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let&apos;s Talk
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-4 py-2 md:text-lg md:px-6 md:py-4"
            >
              <a href="/images/cv.webp" download className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Tech stack preview - optimized */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Tech Stack:</span>
            {techStack.map((tech, idx) => (
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