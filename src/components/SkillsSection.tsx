"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiNodedotjs,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiGit,
	SiMongodb,
	SiPostgresql,
	SiPython,
	SiDocker,
	SiAwsamplify,
	SiRedux,
	SiLangchain,
	SiSass,
	SiPrisma,
	SiJest,
	SiKubernetes,
} from "react-icons/si";
import { IconType } from "react-icons";
import { TbVectorBezierCircle } from "react-icons/tb";

interface Skill {
	name: string;
	icon: IconType;
	color: string;
}

const skillsSection = {
	title: "Skills & Technologies",
	subtitle: "Technologies I've been working with recently",
	skills: [
		{ name: "React", icon: SiReact, color: "#61DAFB" },
		{ name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
		{ name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
		{ name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
		{ name: "Langchain", icon: SiLangchain, color: "#FFFFFF" },
		{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
		{ name: "Node.js", icon: SiNodedotjs, color: "#339933" },
		{ name: "HTML5", icon: SiHtml5, color: "#E34F26" },
		{ name: "CSS3", icon: SiCss3, color: "#1572B6" },
		{ name: "SASS", icon: SiSass, color: "#CC6699" },
		{ name: "Git", icon: SiGit, color: "#F05032" },
		{ name: "MongoDB", icon: SiMongodb, color: "#47A248" },
		{ name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
		{ name: "Prisma", icon: SiPrisma, color: "#2D3748" },
		{ name: "Pinecone", icon: TbVectorBezierCircle, color: "#ffffff" },
		{ name: "Jest", icon: SiJest, color: "#C21325" },
		{ name: "Python", icon: SiPython, color: "#3776AB" },
		{ name: "Docker", icon: SiDocker, color: "#2496ED" },
		{ name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
		{ name: "AWS", icon: SiAwsamplify, color: "#FF9900" },
		{ name: "Redux", icon: SiRedux, color: "#764ABC" },
	] satisfies Skill[],
} as const;

export default function Skills() {
	const skillsRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const skillItems = Array.from(gsap.utils.toArray(".skill-item") as ArrayLike<Element>);

		gsap.set(skillItems, { opacity: 0, scale: 0.8 });

		ScrollTrigger.batch(skillItems, {
			onEnter: (batch) =>
				gsap.to(batch, {
					opacity: 1,
					scale: 1,
					stagger: 0.1,
					duration: 0.5,
					ease: "power2.out",
				}),
			start: "top bottom-=100",
			once: true,
		});

		skillItems.forEach((item) => {
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
		<section id='skills' className='py-12 sm:py-16 md:py-24 xl:py-32 bg-black'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
				<div className='text-center mb-8 sm:mb-12 md:mb-16 xl:mb-20'>
					<div className='text-center mb-6'>
						<h1 className='text-3xl md:text-7xl font-bold uppercase text-amber-50'>
							Skills &
						</h1>
						<h2 className='text-3xl md:text-7xl font-bold uppercase text-stone-700'>
							Technologies
						</h2>
					</div>
					<p className='text-sm sm:text-base md:text-lg xl:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
						{skillsSection.subtitle}
					</p>
				</div>

				<div
					ref={skillsRef}
					className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
					{skillsSection.skills.map((skill, index) => (
						<div
							key={index}
							className='skill-item flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors'>
							<div className='mb-3' style={{ color: skill.color }}>
								{skill.icon && <skill.icon className='w-12 h-12' />}
							</div>
							<p className='text-white/60 text-sm text-center'>{skill.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
