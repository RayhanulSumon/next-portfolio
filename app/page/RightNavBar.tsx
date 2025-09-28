"use client";

import React, { useState, useEffect } from 'react';
import { FaTools, FaTrophy, FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Plane, MeshDistortMaterial } from '@react-three/drei';

function WaterBackground({ distortion }: { distortion: number }) {
  const color = `hsl(${200 + distortion * 40}, 100%, 60%)`;
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 2.5], fov: 50 }}
      frameloop="demand"
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={0.4} />
      <Plane args={[2.2, 4.4, 32, 32]} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distortion}
          speed={1.8}
          transparent
          opacity={0.7}
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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          const scrollRatio = maxScroll > 0 ? scrollY / maxScroll : 0;

          // Smooth distortion interpolation for water-like effect
          setDistortion(prev => prev + (0.25 + scrollRatio * 0.35 - prev) * 0.1);

          const offsets = navItems.map(item => {
            const el = document.getElementById(item.href);
            return el ? Math.abs(el.getBoundingClientRect().top) : Infinity;
          });
          const minIdx = offsets.indexOf(Math.min(...offsets));
          const newActive = navItems[minIdx]?.href || 'hero';

          if (newActive !== active) {
            setActive(newActive);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

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
        <nav className="relative z-10 flex flex-col gap-6 w-full items-center justify-center backdrop-blur-xl bg-white/30 dark:bg-slate-950/30 border border-blue-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                scale: 1.15,
                y: -4,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 12,
                  mass: 0.8
                }
              }}
              whileTap={{
                scale: 0.95,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 15
                }
              }}
              animate={active === item.href ? {
                scale: 1.1,
                y: -2,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 1
                }
              } : {
                scale: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 1
                }
              }}
              style={{ willChange: 'transform' }}
              className="w-full flex flex-col items-center relative"
            >
              {/* Fluid background indicator */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-500/30 dark:to-cyan-500/30 backdrop-blur-sm"
                initial={false}
                animate={active === item.href ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 0.8
                  }
                } : {
                  opacity: 0,
                  scale: 0.8,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }
                }}
              />

              {/* Ripple effect on active */}
              <AnimatePresence>
                {active === item.href && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-blue-400/50 dark:border-cyan-400/50"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1.2, 1],
                      opacity: [0, 0.8, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  />
                )}
              </AnimatePresence>

              <button
                type="button"
                aria-label={`Go to ${item.label}`}
                onClick={() => { scrollToSection(item.href); }}
                className="group relative flex flex-col items-center text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 bg-transparent border-none outline-none cursor-pointer py-3 px-3 rounded-xl transition-colors duration-300"
              >
                <motion.div
                  animate={active === item.href ? {
                    rotateY: [0, 360],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  } : {}}
                >
                  {item.icon}
                </motion.div>

                <AnimatePresence mode="wait">
                  {active === item.href && (
                    <motion.span
                      key={`${item.label}-${active}`}
                      initial={{ opacity: 0, y: 8, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: 0.1
                        }
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.8,
                        transition: {
                          duration: 0.2
                        }
                      }}
                      className="text-[10px] mt-1 font-bold drop-shadow-lg text-blue-600 dark:text-cyan-400 absolute -bottom-1"
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