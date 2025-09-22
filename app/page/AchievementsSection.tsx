"use client";
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaTrophy, FaStar, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Top 1% on Stack Overflow',
    desc: 'Recognized for high-quality answers and community support.',
    icon: <FaStar className="text-yellow-400" />,
  },
  {
    title: 'Open Source Contributor',
    desc: 'Contributed to several popular React and Laravel projects.',
    icon: <FaTrophy className="text-blue-500" />,
  },
  {
    title: 'Certified Web Developer',
    desc: 'Completed advanced certifications in web development and cloud technologies.',
    icon: <FaCertificate className="text-green-500" />,
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
};

function Achievements3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'blur(8px)', opacity: 0.22 }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.5} />
        <Sphere args={[0.7, 32, 32]} position={[-1.5, 0.5, 0]}>
          <MeshDistortMaterial color="#facc15" speed={2.5} distort={0.35} opacity={0.7} transparent />
        </Sphere>
        <Sphere args={[0.5, 32, 32]} position={[1.2, -0.7, 0]}>
          <MeshDistortMaterial color="#38bdf8" speed={2.2} distort={0.25} opacity={0.7} transparent />
        </Sphere>
        <Sphere args={[0.4, 32, 32]} position={[0.5, 1.2, 0]}>
          <MeshDistortMaterial color="#22c55e" speed={2.8} distort={0.3} opacity={0.7} transparent />
        </Sphere>
      </Canvas>
    </div>
  );
}

export default function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="relative py-20 flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Achievements3DBackground />
      <div className="container mx-auto px-4 flex flex-col items-center justify-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-10 text-yellow-600 dark:text-cyan-400 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >Achievements</motion.h2>
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((ach) => (
            <motion.li
              key={ach.title}
              className="flex flex-col items-center bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform backdrop-blur-md cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.06, boxShadow: '0 4px 24px #facc15' }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-4xl mb-4 drop-shadow-lg">{ach.icon}</span>
              <span className="font-semibold text-lg text-yellow-700 dark:text-cyan-300 mb-2 text-center">{ach.title}</span>
              <span className="text-gray-600 dark:text-gray-300 text-base text-center">{ach.desc}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}