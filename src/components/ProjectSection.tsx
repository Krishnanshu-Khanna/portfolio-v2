import ProjectCard from "./ProjectCard";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectsSection = () => {
		const projectsRef = useRef(null);
		useEffect(() => {
				gsap.registerPlugin(ScrollTrigger);
		
				const projectItems = Array.from(gsap.utils.toArray(".project-item") as ArrayLike<Element>);
		
				gsap.set(projectItems, { opacity: 0, scale: 0.8 });
		
				ScrollTrigger.batch(projectItems, {
					onEnter: (batch) =>
						gsap.to(batch, {
							opacity: 1,
							scale: 1,
							stagger: 0.1,
							duration: 0.5,
							ease: "easeOut",
						}),
					start: "top bottom-=100",
					once: true,
				});
		
				projectItems.forEach((item) => {
					item.addEventListener("mouseenter", () => {
						gsap.to(item, { scale: 1.1, duration: 0.3, ease: "power2.out" });
					});
					item.addEventListener("mouseleave", () => {
						gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
					});
				});
		
				return () => {
					ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
				};
			}, []);
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

			<div className='grid grid-cols-1 gap-10' ref={projectsRef}>
				<ProjectCard
					title='CVHelper'
					className='project-item'
					description='📜 A AI saas application using Next.js and Langchain, OpenAI, Gemini.'
					imageUrl='/images/cvgenie.png'
					demoUrl='https://cvhelper.in/'
				/>
				<ProjectCard
					title='Zwigato'
					className='project-item'
					description='🍽️ Online food ordering app using React.js, TypeScript, and Node.js.'
					imageUrl='/images/zwigato.png'
					demoUrl='https://zwigato-frontend.onrender.com/'
				/>
				<ProjectCard
					title='SCRS Website'
					className='project-item'
					description='🚀 Website for junior core members using React.js and Sass.'
					imageUrl='/images/scrsWeb.png'
					demoUrl='https://scrs-vit.vercel.app/'
				/>
			</div>
		</div>
	);
};

export default ProjectsSection;
