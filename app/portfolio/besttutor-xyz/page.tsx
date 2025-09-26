import Image from 'next/image';

export default function BestTutorDetail() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold mb-4">BestTutor.xyz</h1>
			<Image
				src="/images/portfolio/besttutor_light.webp"
				alt="BestTutor.xyz Screenshot"
				width={800}
				height={400}
				className="rounded-lg shadow mb-6"
			/>
			<p className="mb-4">
				BestTutor.xyz is a modern online tutoring marketplace enabling students to find, book, and learn from expert tutors. Features include tutor search, real-time video lessons, secure payments, and personalized dashboards.
			</p>
			<ul className="mb-4 list-disc list-inside">
				<li>Real-time video lessons (WebRTC)</li>
				<li>Secure payments</li>
				<li>Personalized dashboards</li>
				<li>Tutor search and booking</li>
			</ul>
			<p className="mb-2"><strong>Tech Stack:</strong> Next.js, Node.js, MongoDB, WebRTC</p>
			<a
				href="https://besttutor.xyz"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline border border-blue-600 dark:border-blue-400 rounded px-4 py-2 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/30 mt-4"
			>
				View Live
			</a>
		</div>
	);
}