import Image from 'next/image';

export default function BddtiDetail() {
	return (
		<section className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900">
			<div className="w-full max-w-5xl mx-auto px-4 py-10 md:py-16">
				<Image
					src="/images/portfolio/bddti_light.webp"
					alt="BDDTI.com Screenshot"
					width={1200}
					height={500}
					className="w-full h-56 md:h-96 object-cover rounded-2xl shadow mb-8 border border-gray-200 dark:border-gray-800"
					priority
				/>
				<h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white">
					BDDTI.com – Bangladesh Driving Training Institute
				</h1>
				<p className="mb-10 text-lg md:text-xl text-gray-700 dark:text-gray-200 text-center max-w-3xl mx-auto">
					BDDTI.com is the official website for Bangladesh Driving Training Institute, the country’s leading driving school. The platform provides comprehensive information about driving courses, online registration, schedules, and resources for both new and experienced drivers. As the lead web developer, I designed and built a modern, user-friendly, and mobile-responsive site to streamline the enrollment process and improve access to driving education in Bangladesh.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
					<div>
						<h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">Key Features</h2>
						<ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2 text-base md:text-lg">
							<li>Online course registration and payment integration</li>
							<li>Dynamic class schedules and notifications</li>
							<li>Comprehensive course information and FAQs</li>
							<li>Student dashboard for tracking progress</li>
							<li>Admin panel for managing courses, students, and schedules</li>
							<li>Contact forms and Google Maps integration</li>
							<li>Mobile-first, accessible design</li>
						</ul>
					</div>
					<div>
						<h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">My Role & Responsibilities</h2>
						<ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2 text-base md:text-lg">
							<li>Full-stack development: Next.js, React, Tailwind CSS, Node.js</li>
							<li>UI/UX design and implementation</li>
							<li>API integration for registration and notifications</li>
							<li>Performance optimization and SEO</li>
							<li>Deployment and ongoing maintenance</li>
						</ul>
					</div>
				</div>
				<hr className="my-8 border-gray-300 dark:border-gray-700" />
				<div className="mb-10">
					<h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-300">Challenges & Solutions</h2>
					<ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2 text-base md:text-lg">
						<li>Ensured secure and smooth online registration with validation and payment gateway integration</li>
						<li>Optimized for fast load times and high mobile usability</li>
						<li>Implemented an admin dashboard for easy content and schedule management</li>
					</ul>
				</div>
				<p className="mb-8 text-center text-gray-700 dark:text-gray-200 text-base md:text-lg">
					<strong>Tech Stack:</strong> Next.js, React, Tailwind CSS, Node.js, REST API, Google Maps API
				</p>
				<div className="flex justify-center">
					<a
						href="https://bddti.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-white bg-blue-600 dark:bg-blue-500 font-semibold rounded-lg px-8 py-4 shadow hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors border border-blue-700 dark:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 text-lg md:text-xl"
					>
						View Live
					</a>
				</div>
			</div>
		</section>
	);
}