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
	'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900';

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
				className="text-slate-100 dark:text-slate-900 dark:opacity-30"
				d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z"
			/>
		</svg>
	);
}

function Achievements3DBackground() {
	return (
		<div
			className="absolute inset-0 w-full h-full z-0 pointer-events-none"
			style={{ filter: 'blur(12px)', opacity: 0.15 }}
		>
			<Canvas
				camera={{ position: [0, 0, 4], fov: 50 }}
				style={{ width: '100%', height: '100%' }}
				frameloop="demand"
			>
				<ambientLight intensity={0.5} />
				<directionalLight position={[2, 2, 2]} intensity={0.3} />
				<Sphere args={[0.6, 32, 32]} position={[-1.5, 0.5, 0]}>
					<MeshDistortMaterial
						color="#facc15"
						speed={1.5}
						distort={0.2}
						opacity={0.4}
						transparent
					/>
				</Sphere>
				<Sphere args={[0.4, 32, 32]} position={[1.2, -0.7, 0]}>
					<MeshDistortMaterial
						color="#38bdf8"
						speed={1.2}
						distort={0.15}
						opacity={0.4}
						transparent
					/>
				</Sphere>
			</Canvas>
		</div>
	);
}

const achievementColors = [
	{ bg: 'from-yellow-400 to-orange-400', shadow: 'rgba(251, 191, 36, 0.3)' },
	{ bg: 'from-blue-500 to-cyan-400', shadow: 'rgba(59, 130, 246, 0.3)' },
	{ bg: 'from-green-500 to-emerald-400', shadow: 'rgba(34, 197, 94, 0.3)' },
];

export default function AchievementsSection() {
	return (
		<motion.section
			id="achievements"
			className={`relative py-20 flex items-center justify-center min-h-[70vh] ${sectionGradient} overflow-hidden border-t border-slate-200 dark:border-slate-800`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5 }}
		>
			<SectionDivider />
			<Achievements3DBackground />
			<div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-center z-10">
				<div className="text-center mb-16">
					<motion.h2
						className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1, duration: 0.4 }}
					>
						Achievements
					</motion.h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Milestones that reflect dedication, growth, and a passion for excellence in web development
					</p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
					variants={gridVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{achievements.map((ach, idx) => {
						const colors = achievementColors[idx % achievementColors.length];
						return (
							<motion.div
								key={ach.title}
								variants={cardVariants}
								className="relative group"
								style={{ willChange: 'transform' }}
								whileHover={{
									y: -10,
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 20
									}
								}}
							>
								{/* Modern achievement card */}
								<div className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-800/60 backdrop-blur-2xl border border-gray-200/30 dark:border-gray-600/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 p-8">
									{/* Gradient accent border */}
									<div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-15 dark:group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-2xl`} />
									<div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.bg} opacity-60 dark:opacity-40 group-hover:opacity-80 dark:group-hover:opacity-60 transition-opacity duration-300`} />

									{/* Content */}
									<div className="flex flex-col items-center text-center">
										{/* Icon with enhanced styling */}
										<div className="relative mb-6">
											<div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${colors.bg} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
												<span className="text-3xl text-white drop-shadow-lg">
													{ach.icon}
												</span>
											</div>
											{/* Subtle glow behind icon */}
											<div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl -z-10`} />
										</div>

										{/* Title */}
										<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
											{ach.title}
										</h3>

										{/* Description */}
										<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
											{ach.desc}
										</p>
									</div>

									{/* Bottom accent line */}
									<div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r ${colors.bg} opacity-50 group-hover:opacity-80 transition-opacity duration-300 rounded-full`} />

									{/* Subtle card glow */}
									<div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 transition-opacity duration-700 -z-20 blur-3xl`} />
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</motion.section>
	);
}