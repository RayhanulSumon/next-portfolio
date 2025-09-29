"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { FaTools, FaTrophy, FaHome, FaProjectDiagram } from 'react-icons/fa';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, MeshDistortMaterial } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

// Component that uses R3F hooks - must be inside Canvas
function AnimatedPlane({ distortion }: { distortion: number }) {
  const meshRef = useRef<Mesh>(null);
  const colorRef = useRef(200);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth color transition based on distortion
      colorRef.current += (200 + distortion * 40 - colorRef.current) * delta * 2;
      const color = `hsl(${colorRef.current}, 100%, 60%)`;

      // Type-safe material access
      const material = meshRef.current.material as MeshStandardMaterial;
      if (material && material.color) {
        material.color.setStyle(color);
      }
    }
  });

  return (
    <Plane
      ref={meshRef}
      args={[2.2, 4.4, 32, 32]}
      rotation={[-Math.PI / 2.2, 0, 0]}
      position={[0, 0, 0]}
    >
      <MeshDistortMaterial
        color={`hsl(200, 100%, 60%)`}
        attach="material"
        distort={distortion}
        speed={1.8}
        transparent
        opacity={0.7}
      />
    </Plane>
  );
}

function WaterBackground({ distortion }: { distortion: number }) {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 2.5], fov: 50 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={0.4} />
      <AnimatedPlane distortion={distortion} />
    </Canvas>
  );
}

const navItems = [
  { href: 'hero', icon: <FaHome size={28} />, label: 'Home' },
  { href: 'skills', icon: <FaTools size={28} />, label: 'Skills' },
  { href: 'featured-projects', icon: <FaProjectDiagram size={28} />, label: 'Projects' },
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
  const [previousActive, setPreviousActive] = useState('hero');
  const isScrollingRef = useRef(false);

  // Create animation controls for each nav item using useAnimation hooks properly
  const heroAnimation = useAnimation();
  const skillsAnimation = useAnimation();
  const projectsAnimation = useAnimation();
  const achievementsAnimation = useAnimation();

  // Memoized rotation controls mapping
  const rotationControls = useMemo(() => ({
    'hero': heroAnimation,
    'skills': skillsAnimation,
    'featured-projects': projectsAnimation,
    'achievements': achievementsAnimation,
  }), [heroAnimation, skillsAnimation, projectsAnimation, achievementsAnimation]);

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;
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
        setPreviousActive(active);
        setActive(newActive);
      }

      isScrollingRef.current = false;
    });
  }, [active]);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll]);

  // Handle rotation animations with proper cleanup
  useEffect(() => {
    const currentControl = rotationControls[active as keyof typeof rotationControls];
    const previousControl = rotationControls[previousActive as keyof typeof rotationControls];

    if (currentControl) {
      // Stop previous rotation and reset to 0
      if (previousControl && previousActive !== active) {
        previousControl.stop();
        previousControl.set({ rotateY: 0 });
      }

      // Start new rotation for active item
      currentControl.start({
        rotateY: [0, 360],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }
      });
    }

    return () => {
      // Cleanup: stop all rotations and reset positions
      Object.values(rotationControls).forEach((control) => {
        control.stop();
        control.set({ rotateY: 0 });
      });
    };
  }, [active, previousActive, rotationControls]);

  // Memoized nav items to prevent recreation
  const memoizedNavItems = useMemo(() => navItems, []);

  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 18,
        staggerChildren: 0.1
      }}
      className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center"
      style={{ width: '80px' }}
    >
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
          <WaterBackground distortion={distortion} />
        </div>
        <nav className="relative z-10 flex flex-col gap-4 w-full items-center justify-center backdrop-blur-xl bg-white/80 dark:bg-slate-950/30 border border-blue-300/60 dark:border-slate-800 rounded-2xl shadow-2xl p-4">
          <AnimatePresence mode="popLayout">
            {memoizedNavItems.map((item) => {
              const isActive = active === item.href;

              return (
                <motion.div
                  key={item.href}
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={isActive ? {
                    scale: 1.1,
                    y: -3,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      mass: 1
                    }
                  } : {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      mass: 1
                    }
                  }}
                  layout
                  layoutId={item.href}
                  whileHover={{
                    scale: 1.15,
                    y: -6,
                    rotateZ: 5,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 12,
                      mass: 0.8
                    }
                  }}
                  whileTap={{
                    scale: 0.90,
                    rotateZ: -5,
                    transition: {
                      type: "spring",
                      stiffness: 600,
                      damping: 15,
                      mass: 0.5
                    }
                  }}
                  style={{ willChange: 'transform' }}
                  className="w-full flex flex-col items-center relative"
                >
                  {/* Enhanced fluid background indicator with gradient shift */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl backdrop-blur-sm"
                    initial={false}
                    animate={isActive ? {
                      opacity: 1,
                      scale: 1,
                      background: [
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))",
                        "linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4))",
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))"
                      ],
                      transition: {
                        opacity: { type: "spring", stiffness: 200, damping: 20, mass: 0.8 },
                        scale: { type: "spring", stiffness: 200, damping: 20, mass: 0.8 },
                        background: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }
                    } : {
                      opacity: 0,
                      scale: 0.7,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }
                    }}
                  />

                  {/* Multi-layer ripple effect on active */}
                  <AnimatePresence>
                    {isActive && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-blue-500/60 dark:border-cyan-400/50"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{
                            scale: [0.8, 1.3, 1],
                            opacity: [0, 0.8, 0],
                            transition: {
                              duration: 1.2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          exit={{ scale: 0.8, opacity: 0 }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl border border-cyan-400/40 dark:border-blue-400/40"
                          initial={{ scale: 1, opacity: 0 }}
                          animate={{
                            scale: [1, 1.5, 1.2],
                            opacity: [0, 0.6, 0],
                            transition: {
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.3
                            }
                          }}
                          exit={{ scale: 1, opacity: 0 }}
                        />
                      </>
                    )}
                  </AnimatePresence>

                  {/* Enhanced button with morphing effect */}
                  <motion.button
                    type="button"
                    aria-label={`Go to ${item.label}`}
                    onClick={() => {
                      setPreviousActive(active);
                      setActive(item.href);
                      scrollToSection(item.href);
                    }}
                    className="group relative flex flex-col items-center text-blue-700 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 bg-transparent border-none outline-none cursor-pointer py-3 px-3 rounded-xl transition-colors duration-300 z-20"
                    whileHover={{
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderRadius: "16px",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      animate={rotationControls[item.href as keyof typeof rotationControls]}
                      initial={{ rotateY: 0 }}
                      style={{
                        transformStyle: "preserve-3d",
                        willChange: 'transform'
                      }}
                      className="relative z-30"
                    >
                      <motion.div
                        animate={isActive ? {
                          filter: [
                            "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
                            "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))",
                            "drop-shadow(0 0 4px rgba(6, 182, 212, 0.4))",
                            "drop-shadow(0 0 0px rgba(59, 130, 246, 0))"
                          ],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        } : {
                          filter: "drop-shadow(0 0 0px rgba(59, 130, 246, 0))"
                        }}
                        className="flex items-center justify-center"
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>

                    {/* Enhanced label animation with slide effect */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.span
                          key={`${item.label}-${active}`}
                          initial={{
                            opacity: 0,
                            y: 12,
                            scale: 0.7,
                            filter: "blur(4px)"
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              delay: 0.1,
                              duration: 0.5
                            }
                          }}
                          exit={{
                            opacity: 0,
                            y: -12,
                            scale: 0.7,
                            filter: "blur(4px)",
                            transition: {
                              duration: 0.15,
                              ease: "easeInOut"
                            }
                          }}
                          className="text-[10px] mt-1 font-bold drop-shadow-lg text-blue-800 dark:text-cyan-400 absolute -bottom-1 pointer-events-none whitespace-nowrap z-30"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </nav>
      </div>
    </motion.div>
  );
}