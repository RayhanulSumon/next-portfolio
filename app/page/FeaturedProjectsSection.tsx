"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const featuredProjects = [
	{
		title: 'BestTutor.xyz',
		description:
			'A modern online tutoring marketplace enabling students to find, book, and learn from expert tutors. Features include tutor search, real-time video lessons, secure payments, and personalized dashboards. Built with Next.js, Node.js, MongoDB, and WebRTC.',
		image: '/images/portfolio/besttutor_light.webp',
		link: 'https://besttutor.xyz',
	},
	{
		title: 'BDDTI.com',
		description:
			'The official website for Bangladesh Driving Training Institute. Provides information on driving courses, online registration, class schedules, and resources for new and experienced drivers. Developed with Next.js, React, and Tailwind CSS for a user-friendly experience.',
		image: '/images/portfolio/project-2.jpg',
		link: 'https://bddti.com',
	},
	{
		title: 'BDDTI Admin Panel',
		description:
			'A secure admin dashboard for BDDTI, allowing staff to manage courses, users, and content, with advanced analytics and reporting. Built with Next.js, React, and RESTful APIs for robust performance and scalability.',
		image: '/images/portfolio/project-3.jpg',
		link: 'https://admin.bddti.com',
	},
];

const sectionGradient =
	'bg-gradient-to-br from-teal-100 via-purple-100 to-indigo-200 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900';

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

export default function FeaturedProjectsSection() {
	const { resolvedTheme } = useTheme();
	return (
		<section className={`relative py-12 ${sectionGradient}`}>
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
						// Dynamically set BestTutor image based on theme
						let imageSrc = project.image;
						if (project.title === 'BestTutor.xyz') {
							imageSrc = resolvedTheme === 'dark'
								? '/images/portfolio/besttutor_dark.webp'
								: '/images/portfolio/besttutor_light.webp';
						}
						return (
							<motion.div
								key={idx}
								variants={cardVariants}
								className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl overflow-hidden flex flex-col min-h-[480px] transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200 dark:border-gray-800"
							>
								<Image
									src={imageSrc}
									alt={project.title}
									width={600}
									height={300}
									className="h-64 w-full object-cover"
								/>
								<div className="p-6 flex-1 flex flex-col">
									<h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
										{project.title}
									</h3>
									<p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
										{project.description}
									</p>
									<Link
										href={project.link}
										className="mt-auto inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
									>
										View Portfolio
									</Link>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}