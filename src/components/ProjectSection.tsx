"use client";

const ProjectsSection = () => {
	return (
		<div className='py-10 px-6 text-white'>
			<h2 className='text-3xl font-bold text-center mb-6'>Projects</h2>

			<div className='space-y-6'>
				<div>
					<h3 className='text-xl font-semibold'>Zwigato</h3>
					<p>🍽️ Online food ordering app using React.js, TypeScript, and Node.js.</p>
					<p>
						🔗{" "}
						<a
							href='https://zwigato-frontend.onrender.com/'
							target='_blank'
							className='text-blue-400'>
							Live Demo
						</a>
					</p>
				</div>

				<div>
					<h3 className='text-xl font-semibold'>SCRS Website</h3>
					<p>🚀 Website for junior core members using React.js and Sass.</p>
					<p>
						🔗{" "}
						<a
							href='https://scrs-vit.vercel.app/'
							target='_blank'
							className='text-blue-400'>
							Live Demo
						</a>
					</p>
				</div>

				<div>
					<h3 className='text-xl font-semibold'>Certificate Generator</h3>
					<p>📜 A tool to generate certificates using React.js and Tailwind.</p>
					<p>
						🔗{" "}
						<a
							href='https://certificate-gen-lilac.vercel.app/'
							target='_blank'
							className='text-blue-400'>
							Live Demo
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
