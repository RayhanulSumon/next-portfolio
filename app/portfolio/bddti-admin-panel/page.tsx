import Image from 'next/image';

export default function BddtiAdminDetail() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold mb-4">BDDTI Admin Panel</h1>
			<Image
				src="/images/portfolio/bddti_light.webp"
				alt="BDDTI Admin Panel Screenshot"
				width={800}
				height={400}
				className="rounded-lg shadow mb-6"
			/>
			<p className="mb-4">
				The BDDTI Admin Panel is a secure dashboard for staff to manage courses, users, and content, with advanced analytics and reporting for the Bangladesh Driving Training Institute.
			</p>
			<ul className="mb-4 list-disc list-inside">
				<li>Course and user management</li>
				<li>Content editing and publishing</li>
				<li>Analytics and reporting</li>
				<li>Role-based access control</li>
			</ul>
			<p className="mb-2"><strong>Tech Stack:</strong> Next.js, React, RESTful APIs</p>
			<a
				href="https://admin.bddti.com"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline border border-blue-600 dark:border-blue-400 rounded px-4 py-2 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/30 mt-4"
			>
				View Live
			</a>
		</div>
	);
}