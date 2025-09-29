"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";

const featuredProjects = [
	{
		title: 'BestTutor.xyz',
		description:
			'A modern online tutoring marketplace enabling students to find, book, and learn from expert tutors. Features include tutor search, real-time video lessons, secure payments, and personalized dashboards. Built with Next.js, Node.js, MongoDB, and WebRTC.',
		imageLight: '/images/portfolio/besttutor_light.webp',
		imageDark: '/images/portfolio/besttutor_dark.webp',
		link: 'https://besttutor.xyz',
		slug: 'besttutor-xyz',
	},
	{
		title: 'BDDTI.com',
		description:
			'The official website for Bangladesh Driving Training Institute. Provides information on driving courses, online registration, class schedules, and resources for new and experienced drivers. Developed with Next.js, React, and Tailwind CSS for a user-friendly experience.',
		imageLight: '/images/portfolio/bddti_light.webp',
		imageDark: '/images/portfolio/bddti_light.webp',
		link: 'https://bddti.com',
		slug: 'bddti-com',
	},
	{
		title: 'BDDTI Admin Panel',
		description:
			'A secure admin dashboard for BDDTI, allowing staff to manage courses, users, and content, with advanced analytics and reporting. Built with Next.js, React, and RESTful APIs for robust performance and scalability.',
		imageLight: '/images/portfolio/bddti_light.webp',
		imageDark: '/images/portfolio/bddti_light.webp',
		link: 'https://admin.bddti.com',
		slug: 'bddti-admin-panel',
	},
];

const sectionGradient =
  'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900';

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

const accentColors = [
  { from: 'from-blue-500', to: 'to-cyan-400', shadow: 'rgba(59, 130, 246, 0.3)' },
  { from: 'from-purple-500', to: 'to-pink-400', shadow: 'rgba(147, 51, 234, 0.3)' },
  { from: 'from-emerald-500', to: 'to-teal-400', shadow: 'rgba(16, 185, 129, 0.3)' },
];

export default function FeaturedProjectsSection() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section id="featured-projects" className={`relative py-20 ${sectionGradient}`}>
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
						Featured Projects
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Showcasing innovative solutions built with modern technologies
					</p>
				</div>
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-3 gap-8"
					variants={gridVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{featuredProjects.map((project, idx) => {
						const imageSrc = mounted && resolvedTheme === "dark" ? project.imageDark : project.imageLight;
						const accent = accentColors[idx % accentColors.length];
						return (
							<motion.div
								key={idx}
								variants={cardVariants}
								className="relative group"
								style={{ willChange: 'transform' }}
								whileHover={{
									y: -12,
									transition: {
										type: "spring",
										stiffness: 260,
										damping: 20
									}
								}}
							>
								{/* Modern card with enhanced glassmorphism */}
								<div className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200/30 dark:border-gray-700/30 shadow-xl group-hover:shadow-2xl transition-all duration-500">
									{/* Gradient accent border - softened */}
									<div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${accent.from} ${accent.to} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl`} />
									<div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accent.from} ${accent.to} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />

									{/* Enhanced image container */}
									<div className="relative h-56 overflow-hidden">
										<motion.div
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.6, ease: "easeOut" }}
											className="w-full h-full"
										>
											<Image
												src={imageSrc}
												alt={project.title}
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												className="object-cover"
												priority={idx === 0}
												unoptimized={true}
											/>
											{/* Modern overlay gradient - gentler */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
										</motion.div>
									</div>

									{/* Modern content layout */}
									<div className="p-8">
										<div className="flex items-start justify-between mb-4">
											<h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
												{project.title}
											</h3>
											<div className={`w-3 h-3 rounded-full bg-gradient-to-r ${accent.from} ${accent.to} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
										</div>

										<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8 line-clamp-4">
											{project.description}
										</p>

										{/* Modern button group - softer hover effects */}
										<div className="flex flex-col sm:flex-row gap-3">
											<Link
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className={`group/btn relative overflow-hidden rounded-xl px-6 py-3 bg-gradient-to-r ${accent.from} ${accent.to} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex-1 text-center`}
											>
												<span className="relative z-10 flex items-center justify-center gap-2">
													<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
													</svg>
													View Live
												</span>
												<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
											</Link>

											<Link
												href={`/portfolio/${project.slug}`}
												className="group/btn relative overflow-hidden rounded-xl px-6 py-3 bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 flex-1 text-center backdrop-blur-sm"
											>
												<span className="relative z-10 flex items-center justify-center gap-2">
													<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													Details
												</span>
												<div className="absolute inset-0 bg-gradient-to-r from-gray-50/30 dark:from-gray-700/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
											</Link>
										</div>
									</div>

									{/* Subtle glow effect - much softer */}
									<div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${accent.from} ${accent.to} opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-20 blur-3xl`} />
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}