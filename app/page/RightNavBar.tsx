"use client";

import React, { useState, useEffect } from 'react';
import { FaTools, FaTrophy, FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Plane, MeshDistortMaterial } from '@react-three/drei';

function WaterBackground({ distortion }: { distortion: number }) {
  const color = `hsl(${200 + distortion * 40}, 100%, 60%)`;
  return (
    <Canvas style={{ position: 'absolute', inset: 0, zIndex: 0 }} camera={{ position: [0, 0, 2.5], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={0.7} />
      <Plane args={[2.2, 4.4, 64, 64]} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distortion}
          speed={2.5}
        />
      </Plane>
    </Canvas>
  );
}

const navItems = [
  { href: 'hero', icon: <FaHome size={28} />, label: 'Home' },
  { href: 'skills', icon: <FaTools size={28} />, label: 'Skills' },
  { href: 'achievements', icon: <FaTrophy size={28} />, label: 'Achievements' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -24;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function RightNavBar() {
  const [active, setActive] = useState('hero');
  const [distortion, setDistortion] = useState(0.3);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? scrollY / maxScroll : 0;
      setDistortion(0.25 + scrollRatio * 0.35);
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.href);
        return el ? Math.abs(el.getBoundingClientRect().top) : Infinity;
      });
      const minIdx = offsets.indexOf(Math.min(...offsets));
      setActive(navItems[minIdx]?.href || 'hero');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop sidebar only
  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18 }}
      className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center"
      style={{ width: '80px' }}
    >
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
          <WaterBackground distortion={distortion} />
        </div>
        <nav className="relative z-10 flex flex-col gap-8 w-full items-center justify-center backdrop-blur-xl bg-white/30 dark:bg-slate-950/30 border border-blue-200 dark:border-slate-800 rounded-2xl shadow-2xl p-3">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.08, y: -2, boxShadow: '0 0 8px 2px #38bdf880' }}
              whileTap={{ scale: 0.97 }}
              animate={active === item.href ? { scale: 1.07, boxShadow: '0 0 12px 4px #38bdf8aa' } : { scale: 1, boxShadow: 'none' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`w-full flex flex-col items-center rounded-full transition-all duration-200 ${active === item.href ? 'bg-blue-50 dark:bg-slate-900/60' : ''}`}
            >
              <button
                type="button"
                aria-label={`Go to ${item.label}`}
                onClick={() => { scrollToSection(item.href); setActive(item.href); }}
                className="group flex flex-col items-center text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 transition bg-transparent border-none outline-none cursor-pointer py-2 px-2"
              >
                {item.icon}
                <AnimatePresence>
                  {(active === item.href) && (
                    <motion.span
                      key="label"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs mt-1 font-bold drop-shadow-lg text-blue-600 dark:text-cyan-400"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}