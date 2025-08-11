import ProjectCard from "./ProjectCard";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectsSection = () => {
	const projectsRef = useRef(null);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const projectItems = Array.from(
			gsap.utils.toArray(".project-item") as ArrayLike<Element>
		);

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
					description='📜 AI-powered resume builder SaaS using Next.js, Langchain, OpenAI, and Gemini, serving 300+ users.'
					imageUrl='/images/cvgenie.png'
					demoUrl='https://cvhelper.in/'
					technologies={[
						"Next.js",
						"Langchain",
						"OpenAI",
						"Gemini",
						"TypeScript",
						"Tailwind CSS",
					]}
				/>
				{/* <ProjectCard
					title='Zwigato'
					className='project-item'
					description='🍽️ Full-stack online food ordering platform with React.js, TypeScript, and Node.js, featuring live menu and cart sync.'
					imageUrl='/images/zwigato.png'
					demoUrl='https://zwigato-frontend.onrender.com/'
				/>
				<ProjectCard
					title='SCRS Website'
					className='project-item'
					description='🚀 Official Soft Computing Research Society junior core website built using React.js and Sass for streamlined event onboarding.'
					imageUrl='/images/scrsWeb.png'
					demoUrl='https://scrs-vit.vercel.app/'
				/> */}
				<ProjectCard
					title='MELDify'
					className='project-item'
					description='🎥 Multimodal video sentiment analyzer using BERT, TensorFlow, and AWS, integrating text, audio, and visual cues.'
					imageUrl='/images/meldify.png'
					demoUrl='https://meldify.vercel.app/'
					technologies={[
						"BERT",
						"PyTorch",
						"AWS S3",
						"AWS EC2",
						"AWS SageMaker",
						"Docker",
						"FastAPI",
						"Next.js",
					]}
				/>
				<ProjectCard
					title='MicroBlogX'
					className='project-item'
					description='📝 Microservices-based blog platform with RabbitMQ, Redis caching, hybrid PostgreSQL + MongoDB architecture, and AWS deployment.'
					imageUrl='/images/microxblog.png'
					demoUrl='https://microxblog.vercel.app/'
					technologies={[
						"Microservices",
						"RabbitMQ",
						"Redis",
						"PostgreSQL",
						"MongoDB",
						"AWS",
					]}
				/>
			</div>
		</div>
	);
};

export default ProjectsSection;
