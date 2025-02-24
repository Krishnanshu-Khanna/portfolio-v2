import { ProfileCard } from "./ProfileCard";

export default function HomeSection() {
	return (
		<section className='flex flex-col  font-[poppins] lg:flex-row items-center justify-center lg:justify-between  px-10 md:px-24 py-20 space-y-12 md:space-y-0'>
			{/* Profile Card */}
			<div className='overflow-y-hidden flex justify-center items-center p-6 md:p-8'>
				<ProfileCard />
			</div>

			{/* Text Content */}
			<div className='text-center md:text-left overflow-y-hidden font-poppins font-semibold w-full md:w-1/2 space-y-10'>
				<div className='space-y-8 mb-8'>
					<h1 className='text-6xl md:text-7xl font-bold overflow-y-hidden text-amber-50'>
						SOFTWARE
					</h1>
					<h2 className='text-6xl md:text-7xl font-bold overflow-y-hidden text-stone-700'>
						ENGINEER
					</h2>
				</div>
				<div className='flex justify-center  md:block'>
					<p className='text-[14px] md:text-base w-3/4 text-stone-500 leading-relaxed text-center md:text-left'>
						I am a CSE student with experience in building web applications and
						websites. I have worked with various technologies and frameworks like
						React, Next.js, Node.js, Tailwind CSS, and many more.
					</p>
				</div>

				{/* Stats */}
				<div className='flex flex-col gap-8 md:flex-row justify-center md:justify-start space-y-6 md:space-x-12 md:space-y-0'>
					<div className='text-center  md:text-left p-3'>
						<h1 className='text-white text-4xl md:text-5xl overflow-y-hidden font-bold'>
							+3
						</h1>
						<p className='text-stone-600 text-sm'>YEARS OF BUILDING</p>
					</div>
					<div className='text-center md:text-left p-3'>
						<h1 className='text-white text-4xl md:text-5xl overflow-y-hidden font-bold'>
							+20
						</h1>
						<p className='text-stone-600 text-sm'>PROJECTS COMPLETED</p>
					</div>
				</div>
			</div>
		</section>
	);
}
