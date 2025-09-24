"use client";
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiLaravel, SiTailwindcss, SiFigma } from 'react-icons/si';

const gridVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.07,
		},
	},
};


const Skills3DBackground = React.memo(function Skills3DBackground() {
	return (
		<div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'blur(2px)', opacity: 0.12 }}>
			<Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ width: '100%', height: '100%' }} frameloop="demand">
				<ambientLight intensity={0.5} />
				<directionalLight position={[2, 2, 2]} intensity={0.3} />
				{/* Reduced to 2 spheres, lower distort/speed for performance */}
				<Sphere args={[0.7, 32, 32]} position={[-1.2, 0.5, 0]}>
					<MeshDistortMaterial color="#38bdf8" speed={1.2} distort={0.18} opacity={0.5} transparent />
				</Sphere>
				<Sphere args={[0.5, 32, 32]} position={[1.0, -0.7, 0]}>
					<MeshDistortMaterial color="#6366f1" speed={1.0} distort={0.12} opacity={0.5} transparent />
				</Sphere>
			</Canvas>
		</div>
	);
});

function SkillCard({ skill }: { skill: { name: string; icon: React.ReactNode } }) {
	return (
		<motion.div
			className="flex flex-col items-center bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform"
			initial={{ opacity: 0, rotateY: 15 }}
			whileInView={{ opacity: 1, rotateY: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
		>
			<span className="text-4xl mb-2">{skill.icon}</span>
			<span className="font-semibold text-lg text-gray-700 dark:text-gray-200">{skill.name}</span>
		</motion.div>
	);
}

export default function SkillsSection() {
	const skills = React.useMemo(
		() => [
			{ name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
			{ name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
			{ name: 'React', icon: <FaReact className="text-cyan-400" /> },
			{ name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
			{ name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
			{ name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
			{ name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
			{ name: 'UI/UX', icon: <SiFigma className="text-purple-500" /> },
		],
		[]
	);

	return (
		<motion.section
			id="skills"
			className="relative py-16 flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<Skills3DBackground />
			<div className="container mx-auto px-4 flex flex-col items-center justify-center z-10">
				<motion.h2
					className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-600 dark:text-cyan-400 text-center drop-shadow-lg"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.7 }}
				>
					Skills
				</motion.h2>
				<motion.div
					className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full"
					style={{ perspective: 1200 }}
					variants={gridVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{skills.map((skill) => (
						<SkillCard key={skill.name} skill={skill} />
					))}
				</motion.div>
			</div>
		</motion.section>
	);
}