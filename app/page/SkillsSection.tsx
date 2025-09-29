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
			staggerChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
		}
	},
};

const sectionGradient =
  "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-sky-900";

function SectionDivider() {
	return (
		<svg className="absolute top-0 left-0 w-full h-16 -translate-y-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" className="text-slate-950 dark:text-slate-800 dark:opacity-40" d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z" />
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

function SkillCard({ skill }: { skill: { name: string; icon: React.ReactNode; color: string } }) {
	return (
		<motion.div
			className={`flex flex-col items-center rounded-3xl shadow-2xl p-8 backdrop-blur-xl border-2 relative overflow-hidden group bg-white/70 dark:bg-slate-900/70 border-[${skill.color}]`}
			variants={cardVariants}
			style={{ willChange: 'transform', boxShadow: `0 4px 32px 0 ${skill.color}33` }}
			whileHover={{
				y: -12,
				scale: 1.04,
				boxShadow: `0 8px 40px 0 ${skill.color}66`,
				transition: { duration: 0.2 }
			}}
		>
			<span className="text-6xl mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-200 relative">
				{skill.icon}
				<span className={`absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50`} style={{ background: skill.color }} />
			</span>
			<span className={`font-bold text-lg md:text-xl text-center tracking-wide`} style={{ color: skill.color }}>
				{skill.name}
			</span>
			<span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-1 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-200" style={{ background: `linear-gradient(90deg, ${skill.color} 0%, #fff 100%)` }} />
		</motion.div>
	);
}

export default function SkillsSection() {
	const skills = React.useMemo(
		() => [
			{ name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, color: '#facc15' },
			{ name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, color: '#3b82f6' },
			{ name: 'React', icon: <FaReact className="text-cyan-400" />, color: '#06b6d4' },
			{ name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" />, color: '#111827' },
			{ name: 'Laravel', icon: <SiLaravel className="text-red-500" />, color: '#ef4444' },
			{ name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, color: '#22d3ee' },
			{ name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, color: '#22c55e' },
			{ name: 'UI/UX', icon: <SiFigma className="text-purple-500" />, color: '#a21caf' },
		],
		[]
	);

	return (
		<motion.section
			id="skills"
			className={`relative py-24 flex items-center justify-center min-h-[65vh] ${sectionGradient} overflow-hidden border-t-4 border-slate-200 dark:border-slate-900`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<SectionDivider />
			<Skills3DBackground />
			<div className="container mx-auto px-4 flex flex-col items-center justify-center z-10">
				<motion.h2
					className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-fuchsia-500 to-cyan-400 dark:from-cyan-400 dark:via-sky-400 dark:to-fuchsia-400 text-center drop-shadow-xl tracking-tight"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.4 }}
				>
					Skills
				</motion.h2>
				<p className="mb-12 text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-2xl font-medium">
					My core technologies and tools for building modern, scalable, and beautiful web applications.
				</p>
				<motion.div
					className="grid grid-cols-2 sm:grid-cols-4 gap-10 w-full"
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