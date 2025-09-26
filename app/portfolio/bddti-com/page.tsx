import Image from 'next/image';

export default function BddtiDetail() {
	return (
		<section className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900">
			<div className="w-full max-w-5xl mx-auto px-4 py-10 md:py-16 prose prose-blue dark:prose-invert prose-lg">
				<Image
					src="/images/portfolio/bddti_light.webp"
					alt="BDDTI.com Screenshot"
					width={1200}
					height={500}
					className="w-full h-56 md:h-96 object-cover rounded-2xl shadow mb-8 border border-gray-200 dark:border-gray-800"
					priority
				/>
				<h1 className="!text-4xl md:!text-5xl !font-extrabold !mb-6 text-center text-gray-900 dark:text-white">
					<span className="text-blue-700 dark:text-blue-400">BDDTI.com</span> – Bangladesh Driving Training Institute
				</h1>
				<p className="!mb-10 !text-lg md:!text-xl text-center max-w-3xl mx-auto">
					<span className="font-semibold text-blue-700 dark:text-blue-400">BDDTI.com</span> is the official website for <span className="font-semibold text-blue-700 dark:text-blue-400">Bangladesh Driving Training Institute</span>, the country’s leading driving school. The platform provides <span className="font-semibold">comprehensive information</span> about driving courses, <span className="font-semibold">online registration</span>, schedules, and resources for both new and experienced drivers. As the <span className="font-semibold text-blue-700 dark:text-blue-400">lead web developer</span>, I designed and built a <span className="font-semibold">modern, user-friendly, and mobile-responsive site</span> to streamline the enrollment process and improve access to driving education in Bangladesh.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
					<div>
						<h2 className="!text-2xl !font-bold mb-3 text-blue-700 dark:text-blue-300">Key Features</h2>
						<ul className="list-disc list-inside space-y-2 !text-base md:!text-lg">
							<li><span className="font-semibold text-blue-700 dark:text-blue-400">Online course registration</span> and payment integration</li>
							<li><span className="font-semibold">Dynamic class schedules</span> and notifications</li>
							<li>Comprehensive course information and <span className="font-semibold">FAQs</span></li>
							<li><span className="font-semibold">Student dashboard</span> for tracking progress</li>
							<li><span className="font-semibold">Admin panel</span> for managing courses, students, and schedules</li>
							<li>Contact forms and <span className="font-semibold">Google Maps integration</span></li>
							<li><span className="font-semibold">Mobile-first, accessible design</span></li>
						</ul>
					</div>
					<div>
						<h2 className="!text-2xl !font-bold mb-3 text-blue-700 dark:text-blue-300">My Role & Responsibilities</h2>
						<ul className="list-disc list-inside space-y-2 !text-base md:!text-lg">
							<li><span className="font-semibold">Full-stack development</span>: Next.js, React, Tailwind CSS, Node.js</li>
							<li><span className="font-semibold">UI/UX design</span> and implementation</li>
							<li><span className="font-semibold">API integration</span> for registration and notifications</li>
							<li><span className="font-semibold">Performance optimization</span> and SEO</li>
							<li><span className="font-semibold">Deployment</span> and ongoing maintenance</li>
						</ul>
					</div>
				</div>
				<hr className="my-8 border-gray-300 dark:border-gray-700" />
				<div className="mb-10">
					<h2 className="!text-2xl !font-bold mb-3 text-blue-700 dark:text-blue-300">Challenges & Solutions</h2>
					<ul className="list-disc list-inside space-y-2 !text-base md:!text-lg">
						<li>Ensured <span className="font-semibold text-blue-700 dark:text-blue-400">secure and smooth online registration</span> with validation and payment gateway integration</li>
						<li><span className="font-semibold">Optimized for fast load times</span> and high mobile usability</li>
						<li>Implemented an <span className="font-semibold">admin dashboard</span> for easy content and schedule management</li>
					</ul>
				</div>
				<p className="mb-8 text-center !text-base md:!text-lg">
					<strong>Tech Stack:</strong> <span className="font-semibold text-blue-700 dark:text-blue-400">Next.js</span>, <span className="font-semibold text-blue-700 dark:text-blue-400">React</span>, <span className="font-semibold text-blue-700 dark:text-blue-400">Tailwind CSS</span>, <span className="font-semibold text-blue-700 dark:text-blue-400">Node.js</span>, REST API, Google Maps API
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