import { useRef, useEffect } from "react";
import { ProfileCard } from "./ProfileCard";
import { Download } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export default function HomeSection() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".profile-card", {
				y: 100,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			});

			gsap.from(".text-content > *", {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				ease: "power3.out",
			});

			gsap.from(".stats > div", {
				y: 30,
				opacity: 0,
				duration: 0.6,
				stagger: 0.15,
				ease: "power3.out",
				delay: 0.5,
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className='flex flex-col font-[poppins] lg:flex-row items-center justify-center lg:justify-between px-10 md:px-24 py-20 mt-5 space-y-12 md:space-y-0'>
			{/* Profile Card */}
			<div className='overflow-y-hidden flex justify-center items-center profile-card'>
				<ProfileCard />
			</div>

			{/* Text Content */}
			<div className='text-content text-center md:text-left overflow-y-hidden font-poppins font-semibold w-full lg:w-1/2 space-y-10'>
				<div className='space-y-0 md:space-y-8 mb-8'>
					<h1 className='text-3xl md:text-7xl font-bold overflow-y-hidden text-amber-50'>
						SOFTWARE
					</h1>
					<h2 className='text-3xl md:text-7xl font-bold overflow-y-hidden text-stone-700'>
						ENGINEER
					</h2>
				</div>
				<div className='flex justify-center md:block'>
					<p className='text-[14px] md:text-base w-3/4 text-stone-500 leading-relaxed text-center md:text-left'>
						I am a CSE student with experience in building web applications and
						websites. I have worked with various technologies and frameworks like
						React, Next.js, Node.js, Tailwind CSS, and many more.
					</p>
				</div>

				{/* Stats */}
				<div className='stats flex flex-col gap-8 md:flex-row justify-center md:justify-start space-y-6 md:space-x-12 md:space-y-0'>
					<div className='text-center md:text-left p-3'>
						<h1 className='text-white text-2xl md:text-5xl overflow-y-hidden font-bold'>
							+2
						</h1>
						<p className='text-stone-600 text-[12px] md:text-sm'>YEARS OF BUILDING</p>
					</div>
					<div className='text-center md:text-left p-3'>
						<h1 className='text-white text-2xl md:text-5xl overflow-y-hidden font-bold'>
							+10
						</h1>
						<p className='text-stone-600 text-[12px] md:text-sm'>
							PROJECTS COMPLETED
						</p>
					</div>
				</div>

				{/* Download Resume Button */}
				<div className='flex justify-center md:justify-start mt-5'>
					<Link href='/resume' target='_blank' rel='noopener noreferrer'>
						<button className='group relative flex items-center gap-3 px-5 py-[10px] bg-amber-50/10 hover:bg-amber-50/20 border border-amber-50/30 hover:border-amber-50/50 rounded-lg transition-all duration-300 backdrop-blur-sm'>
							<Download className='w-5 h-5 text-amber-50 group-hover:text-amber-100 transition-colors duration-300' />
							<span className='text-amber-50 group-hover:text-amber-100 font-medium transition-colors duration-300'>
								Download Resume
							</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
