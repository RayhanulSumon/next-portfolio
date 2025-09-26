"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { Mesh, SphereGeometry, Material } from 'three';

interface DistortMaterial extends Material {
  distort: number;
}

function Hero3DBackground() {
  // Only render Canvas after hydration
  const [isClient, setIsClient] = useState(false);
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
    // Internal y position for smooth interpolation
    const yPos = useRef(-0.7);
    useFrame(() => {
      if (ref.current) {
        // Only run animation on client
        (ref.current.material as DistortMaterial).distort = 0.15 + Math.sin(Date.now() * 0.001) * 0.07;
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
        <MeshDistortMaterial color="#38bdf8" speed={1.2} transparent opacity={0.7} />
      </Sphere>
    );
  }

  // Only render Canvas on client
  if (!isClient) return null;

  return (
    <div className="absolute left-0 right-0 top-0 h-screen pointer-events-none" style={{ filter: 'blur(8px)', opacity: 0.35 }}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={0.3} />
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

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden"
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
            className="relative group rounded-3xl p-2 bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-700 shadow-2xl"
            style={{ perspective: 1000 }}
            whileHover={{ rotateY: 10, rotateX: 6, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            {/* Animated ring effect */}
            <span className="absolute -inset-2 rounded-3xl z-0 animate-hero-ring bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-700 blur-sm opacity-50" />
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl border-4 border-white dark:border-slate-800 group-hover:shadow-blue-400/40 transition-all duration-300 relative z-10">
              <Image
                src="/images/hero/sumon.webp"
                alt="Rayhanul Sumon"
                width={320}
                height={320}
                className="object-cover w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-700 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-300 z-[-1]" />
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Hi, I&apos;m Rayhanul Sumon
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Full Stack Web Developer passionate about creating amazing digital experiences with React, Next.js, Laravel, and modern web technologies.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >Contact Me</motion.a>
            <motion.a
              href="/images/cv.webp" download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold shadow hover:bg-cyan-600 transition"
            >Download CV</motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}