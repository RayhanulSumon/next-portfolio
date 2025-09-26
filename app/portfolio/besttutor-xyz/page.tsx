import Image from 'next/image';

export default function BestTutorDetail() {
	return (
		<section className="min-h-screen w-full bg-white dark:bg-slate-900 transition-colors duration-300">
			<div className="w-full max-w-4xl mx-auto px-4 py-10 md:py-16">
				<Image
					src="/images/portfolio/besttutor_light.webp"
					alt="BestTutor.xyz Screenshot"
					width={1200}
					height={400}
					className="mx-auto w-full max-w-3xl h-40 md:h-64 lg:h-72 object-cover rounded-2xl shadow mb-8 border border-gray-200 dark:border-slate-800"
					priority
				/>
				<h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
					<span className="text-blue-700 dark:text-cyan-400">BestTutor.xyz</span> – Online Tutoring Marketplace
				</h1>
				<div className="flex justify-center">
					<p className="mb-14 mt-2 text-lg md:text-xl leading-relaxed md:leading-loose text-center w-full max-w-5xl text-gray-700 dark:text-gray-100">
						<span className="font-semibold text-blue-700 dark:text-cyan-400">BestTutor.xyz</span> is a global online tutoring platform connecting students with expert tutors. The platform features advanced tutor search and filtering, instant booking, secure payments, and a real-time chat system. Students can browse tutor profiles, read reviews, and schedule sessions in their preferred subjects. Tutors manage their availability, pricing, and lesson materials through a dedicated dashboard. The platform is designed for seamless, real-time learning experiences across devices.
					</p>
				</div>
				<div className="flex justify-center mb-10">
					<div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-60"></div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
					<div>
						<h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-cyan-300">Key Features</h2>
						<ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-800 dark:text-gray-100">
							<li><span className="font-semibold">Advanced tutor search</span> and filtering by subject, price, rating, and availability</li>
							<li><span className="font-semibold">Instant booking</span> and calendar integration</li>
							<li><span className="font-semibold">Secure online payments</span> and wallet system</li>
							<li><span className="font-semibold">Student and tutor dashboards</span> for managing lessons, schedules, and earnings</li>
							<li><span className="font-semibold">Ratings, reviews, and messaging</span> between students and tutors</li>
							<li><span className="font-semibold">Responsive design</span> for web and mobile</li>
						</ul>
					</div>
					<div>
						<h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-cyan-300">My Role & Responsibilities</h2>
						<ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-800 dark:text-gray-100">
							<li><span className="font-semibold">Full-stack development</span>: Next.js, React, Tailwind CSS, Laravel REST API</li>
							<li><span className="font-semibold">UI/UX design</span> and implementation</li>
							<li><span className="font-semibold">Payment gateway and calendar integration</span></li>
							<li><span className="font-semibold">Real-time chat features</span></li>
							<li><span className="font-semibold">Performance optimization</span> and SEO</li>
							<li><span className="font-semibold">Deployment and maintenance</span></li>
						</ul>
					</div>
				</div>
				<hr className="my-8 border-gray-300 dark:border-slate-700" />
				<div className="mb-10">
					<h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-cyan-300">Tech Stack</h2>
					<p className="text-base md:text-lg text-gray-700 dark:text-gray-100">
						<span className="font-semibold text-blue-700 dark:text-cyan-400">Next.js</span>, <span className="font-semibold text-blue-700 dark:text-cyan-400">React</span>, <span className="font-semibold text-blue-700 dark:text-cyan-400">Tailwind CSS</span>, <span className="font-semibold text-blue-700 dark:text-cyan-400">Laravel REST API</span>, Google Maps API
					</p>
				</div>
				<div className="flex justify-center">
					<a
						href="https://besttutor.xyz"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-white bg-blue-600 dark:bg-cyan-600 font-semibold rounded-lg px-8 py-4 shadow hover:bg-blue-700 dark:hover:bg-cyan-500 transition-colors border border-blue-700 dark:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 text-lg md:text-xl"
					>
						View Live
					</a>
				</div>
			</div>
		</section>
	);
}