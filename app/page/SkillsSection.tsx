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

const sectionGradient =
	"bg-gradient-to-br from-cyan-100 via-sky-100 to-fuchsia-100 dark:from-slate-900 dark:via-slate-950 dark:to-sky-900";

function SectionDivider() {
	return (
		<svg className="absolute top-0 left-0 w-full h-16 -translate-y-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" className="text-sky-100 dark:text-slate-950" d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z" />
		</svg>
	);
}

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
			className="flex flex-col items-center bg-white/60 dark:bg-slate-900/60 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform backdrop-blur-xl border-2 border-sky-200 dark:border-fuchsia-800 relative overflow-hidden group"
			initial={{ opacity: 0, rotateY: 15 }}
			whileInView={{ opacity: 1, rotateY: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			style={{ willChange: 'transform, opacity', backfaceVisibility: 'hidden' }}
		>
			<span className="text-5xl mb-4 drop-shadow-lg group-hover:scale-110 transition-transform">{skill.icon}</span>
			<span className="font-bold text-lg md:text-xl text-sky-700 dark:text-fuchsia-300 text-center tracking-wide">{skill.name}</span>
			{/* Accent bar */}
			<span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-1 bg-gradient-to-r from-fuchsia-400 via-sky-400 to-cyan-400 rounded-full opacity-70 group-hover:opacity-100 transition-all" />
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
			className={`relative py-24 flex items-center justify-center min-h-[65vh] ${sectionGradient} overflow-hidden border-t-4 border-slate-300 dark:border-slate-800`}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<SectionDivider />
			<Skills3DBackground />
			<div className="container mx-auto px-4 flex flex-col items-center justify-center z-10">
				<motion.h2
					className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-500 to-cyan-400 dark:from-cyan-400 dark:via-sky-400 dark:to-fuchsia-400 text-center drop-shadow-xl tracking-tight"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.7 }}
				>
					Skills
				</motion.h2>
				<p className="mb-12 text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-2xl font-medium">
					My core technologies and tools for building modern, scalable, and beautiful web applications.
				</p>
				<motion.div
					className="grid grid-cols-2 sm:grid-cols-4 gap-10 w-full"
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