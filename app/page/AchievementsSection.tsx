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
	'bg-gradient-to-br from-teal-100 via-purple-100 to-indigo-200 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900';

function SectionDivider() {
	return (
		<svg
			className="absolute top-0 left-0 w-full h-16 -translate-y-full"
			viewBox="0 0 1440 80"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="currentColor"
				className="text-indigo-200 dark:text-slate-950"
				d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z"
			/>
		</svg>
	);
}

function Achievements3DBackground() {
	return (
		<div
			className="absolute inset-0 w-full h-full z-0 pointer-events-none"
			style={{ filter: 'blur(8px)', opacity: 0.22 }}
		>
			<Canvas
				camera={{ position: [0, 0, 4], fov: 50 }}
				style={{ width: '100%', height: '100%' }}
			>
				<ambientLight intensity={0.7} />
				<directionalLight position={[2, 2, 2]} intensity={0.5} />
				<Sphere args={[0.7, 32, 32]} position={[-1.5, 0.5, 0]}>
					<MeshDistortMaterial
						color="#facc15"
						speed={2.5}
						distort={0.35}
						opacity={0.7}
						transparent
					/>
				</Sphere>
				<Sphere args={[0.5, 32, 32]} position={[1.2, -0.7, 0]}>
					<MeshDistortMaterial
						color="#38bdf8"
						speed={2.2}
						distort={0.25}
						opacity={0.7}
						transparent
					/>
				</Sphere>
				<Sphere args={[0.4, 32, 32]} position={[0.5, 1.2, 0]}>
					<MeshDistortMaterial
						color="#22c55e"
						speed={2.8}
						distort={0.3}
						opacity={0.7}
						transparent
					/>
				</Sphere>
			</Canvas>
		</div>
	);
}

export default function AchievementsSection() {
	return (
		<motion.section
			id="achievements"
			className={`relative py-24 flex items-center justify-center min-h-[70vh] ${sectionGradient} overflow-hidden border-t-4 border-indigo-200 dark:border-slate-800`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5 }}
		>
			<SectionDivider />
			<Achievements3DBackground />
			<div className="container mx-auto px-4 flex flex-col items-center justify-center z-10">
				<motion.h2
					className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-teal-400 dark:from-cyan-400 dark:via-indigo-400 dark:to-fuchsia-400 text-center drop-shadow-xl tracking-tight"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.4 }}
				>
					Achievements
				</motion.h2>
				<p className="mb-12 text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-2xl font-medium">
					A few highlights from my journey so far. Each milestone reflects
					dedication, growth, and a passion for excellence.
				</p>
				<motion.ul
					className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full"
					variants={gridVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{achievements.map((ach, idx) => (
						<motion.li
							key={ach.title}
							className="flex flex-col items-center bg-white/60 dark:bg-slate-900/60 rounded-3xl shadow-2xl p-10 backdrop-blur-xl border-2 border-indigo-200 dark:border-indigo-800 relative overflow-hidden group"
							variants={cardVariants}
							style={{ willChange: 'transform' }}
							whileHover={{
								y: -8,
								transition: { duration: 0.2 }
							}}
							whileTap={{ scale: 0.98 }}
						>
							<span className="text-5xl mb-5 drop-shadow-lg group-hover:scale-110 transition-transform">
								{ach.icon}
							</span>
							<span className="font-bold text-xl md:text-2xl text-indigo-700 dark:text-fuchsia-300 mb-3 text-center tracking-wide">
								{ach.title}
							</span>
							<span className="text-gray-700 dark:text-gray-200 text-base md:text-lg text-center font-medium">
								{ach.desc}
							</span>
							{/* Accent bar */}
							<span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-1 bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-teal-400 rounded-full opacity-70 group-hover:opacity-100 transition-all" />
						</motion.li>
					))}
				</motion.ul>
			</div>
		</motion.section>
	);
}