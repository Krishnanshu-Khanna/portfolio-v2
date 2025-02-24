import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
	return (
		<div className='container mx-auto px-6 py-20 relative'>
			{/* Title */}
			<div className=' text-center mb-10 mt-15'>
				<h1 className='text-3xl md:text-7xl font-bold uppercase text-amber-50'>
					Recent
				</h1>
				<h2 className='text-3xl md:text-7xl font-bold uppercase text-stone-700'>
					Projects
				</h2>
			</div>

			<div className='grid grid-cols-1 gap-10'>
				<ProjectCard
					title='CVGenie'
					description='📜 A AI saas application using Next.js and Langchain, OpenAI, Gemini.'
					imageUrl='/images/cvgenie.png'
					demoUrl='https://aicvgenie.vercel.app/'
				/>
				<ProjectCard
					title='Zwigato'
					description='🍽️ Online food ordering app using React.js, TypeScript, and Node.js.'
					imageUrl='/images/zwigato.png'
					demoUrl='https://zwigato-frontend.onrender.com/'
				/>
				<ProjectCard
					title='SCRS Website'
					description='🚀 Website for junior core members using React.js and Sass.'
					imageUrl='/images/scrsWeb.png'
					demoUrl='https://scrs-vit.vercel.app/'
				/>
			</div>
		</div>
	);
};

export default ProjectsSection;
