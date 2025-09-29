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
  'from-blue-400 to-cyan-400',
  'from-indigo-500 to-purple-400',
  'from-fuchsia-500 to-pink-400',
];

export default function FeaturedProjectsSection() {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section id="featured-projects" className={`relative py-12 ${sectionGradient}`}>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
					Featured Projects
				</h2>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					variants={gridVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{featuredProjects.map((project, idx) => {
						const imageSrc = mounted && resolvedTheme === "dark" ? project.imageDark : project.imageLight;
						const accent = accentColors[idx % accentColors.length];
						return (
							<motion.div
								key={idx}
								variants={cardVariants}
								className={`relative rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[480px] border-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl group`}
								style={{
									willChange: 'transform, box-shadow',
								}}
								whileHover={{
									y: -8,
									scale: 1.02,
									boxShadow: '0 20px 60px 0 rgba(56,189,248,0.2)',
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 30,
										duration: 0.15
									}
								}}
								whileTap={{ scale: 0.98 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 40
								}}
							>
								{/* Accent bar */}
								<motion.span
									className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${accent}`}
									initial={{ opacity: 0.7 }}
									whileHover={{ opacity: 1 }}
									transition={{ duration: 0.2 }}
								/>
								{/* Project Image */}
								<div className="relative w-full h-64 overflow-hidden">
									<motion.div
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
										className="w-full h-full"
									>
										<Image
											src={imageSrc}
											alt={project.title}
											fill
											sizes="(max-width: 768px) 100vw, 33vw"
											className="object-cover"
											priority={idx === 0}
											unoptimized={true}
										/>
									</motion.div>
								</div>
								{/* Card Content */}
								<div className="p-6 flex-1 flex flex-col">
									<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
										{project.title}
									</h3>
									<p className="text-gray-700 dark:text-gray-300 mb-4 flex-1 text-base">
										{project.description}
									</p>
									<div className="mt-auto flex gap-3">
										<Link
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-700 dark:to-cyan-700 px-4 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-150"
										>
											View Live
										</Link>
										<Link
											href={`/portfolio/${project.slug}`}
											className="inline-block font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-150 border border-gray-300 dark:border-gray-700"
										>
											View Details
										</Link>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}