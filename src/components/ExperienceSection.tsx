"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Card from "./ExpCard";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const panelsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		const panels = panelsRef.current;
		if (!section || !panels) return;

		const totalWidth = panels.scrollWidth;

		gsap.to(panels, {
			x: () => -(totalWidth - window.innerWidth),
			ease: "none",
			scrollTrigger: {
				trigger: section,
				start: "top top",
				end: () => `+=${totalWidth - window.innerWidth}`,
				scrub: 1,
				pin: true,
				anticipatePin: 1,
				invalidateOnRefresh: true,
				snap: {
					snapTo: 1 / (panels.children.length - 1),
					duration: { min: 0.1, max: 0.3 },
					delay: 0.1,
					ease: "power1.inOut",
				},
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className='relative w-full min-h-screen bg-black text-white overflow-hidden '>
			{/* Title */}
			<div className=' text-center mb-20 mt-15'>
				<h1 className='text-3xl md:text-7xl font-bold uppercase text-amber-50'>
					Recent
				</h1>
				<h2 className='text-3xl md:text-7xl font-bold uppercase text-stone-700'>
					Experiences
				</h2>
			</div>

			{/* 🔥 Horizontal Scrolling Panels */}
			<div ref={panelsRef} className='flex gap-30 h-[40vh] md:w-[190vw] w-[175vw]  ml-5 p-2'>
				{/* Frontend Developer Section */}
				<div className='w-fit h-full flex items-center justify-center'>
					<Card
						title='Frontend Dev Intern'
						subtitle='KeyNcoder (Apr 2024 - Aug 2024)'
						grade='5 Months'
						description="🔥 As a frontend developer intern at a VITTBI-incubated startup, I transformed a Figma UI design into a fully functional website and implemented an LMS to enhance training services for Tier 2 and 3 colleges. I collaborated on improving UX/UI design, contributing to the company's training and placement services for educational institutions."
						backgroundColors={{ top: "#E63946", bottom: "#F77F00" }}
						image='/images/keyncoder.jpeg'
					/>
				</div>

				{/* Summer Intern Section */}
				<div className='w-fit h-full flex items-center justify-center'>
					<Card
						title='Summer Intern'
						subtitle='Ernst & Young (Jun 2024 - Jul 2024)'
						grade='1 Months'
						description='📊 Conducted research and analysis to increase ERP awareness in the power sector with 12% increase. Collaborated with the project mentor and team to develop actionable insights.'
						backgroundColors={{ top: "#6A0572", bottom: "#AB83A1" }}
						image='/images/ey.png'
					/>
				</div>
				{/* SDE Intern Section */}
				<div className='w-fit h-full flex items-center justify-center'>
					<Card
						title='Vice Chairperson'
						subtitle='Soft Computing Research Society (Jan 2024 - Dec 2024)'
						grade='1 Year'
						description='💻 Under my leadership, the chapter received a nomination for Best Chapter at VIT, competing among 70+ chapters. I successfully organized an event during Gravitas, attracting 250+ paid registrations. Additionally, I developed the official website for SCRS-VIT and served as the POC (Point of Contact) for major events, ensuring smooth coordination and execution.'
						backgroundColors={{ top: "#2A9D8F", bottom: "#264653" }}
						image='/images/scrs.png'
					/>
				</div>
				{/* Education Section */}
				<div className='w-fit h-full flex items-center justify-center'>
					<Card
						title='B.Tech. Undergraduation'
						subtitle='Vellore Institute of Technology (2022 - Present)'
						grade='CGPA: 9.28'
						backgroundColors={{ top: "#4F46E5", bottom: "#8C3FF1" }}
						image='/images/vit.png'
						description='Activities and societies:
◈ Soft Computing Research Society, IEEE-PCS
◈ Interned at VITTBI (VIT Technology Business Incubator) incubated startup, KeynCoders
◈ Played in the VIT Freshers Cricket Tournament Quarterfinalist, Swimming'
					/>
				</div>
				{/* Education Section */}
				<div className='w-fit h-full flex items-center justify-center'>
					<Card
						title='Higher Secondary 12th'
						subtitle='GMSSS-21A, Chandigarh'
						grade='93% (2022)'
						backgroundColors={{ top: "#57f542", bottom: "#d1f542" }}
						image='/images/gmsss21.jpg' // Replace with the actual image path
					/>
				</div>
				{/* Education Section */}
				<div className='w-fit h-full flex items-center justify-center'>
					<Card
						title='Secondary 10th'
						subtitle='Bhavan Vidyalaya, Panchkula, Haryana'
						grade='94% (2020)'
						backgroundColors={{ top: "#3182CE", bottom: "#2B6CB0" }}
						image='/images/bvp.jpeg' // Replace with the actual image path
					/>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
