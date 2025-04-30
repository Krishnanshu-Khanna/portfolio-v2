import { FileText, Flame, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import HoverLabelIcon from "./HoverLabel";
import { FaMediumM } from "react-icons/fa";

export const ProfileCard = () => {
	return (
		<div className='bg-white font-[montserrat]  rounded-3xl flex flex-col  items-center justify-evenly p-4 w-[300px] md:w-[400px] h-[630px] relative shadow-lg md:p-6 '>
			{/* Decorative Curved Line */}
			<div className='absolute z-10 top-[-30%] left-[-20%] w-60 h-60 rotate-[180deg]'>
				<svg viewBox='0 0 100 100' className=' h-full'>
					<path
						d='M10,50 A40,40 0 0,1 90,50'
						fill='none'
						stroke='#FF6B00'
						strokeWidth='1.5'
						strokeDasharray='6 6'
						strokeLinecap='round'
					/>
				</svg>
			</div>

			{/* Profile Image */}
			<div className='bg-[#D64A1F] w-fit rounded-2xl overflow-y-hidden  flex justify-center items-center'>
				<Image
					src='/images/hero6.jpg'
					alt='Profile'
					width={300}
					height={300}
					className='rounded-xl object-cover mix-blend-luminosity contrast-125'
				/>
			</div>

			{/* Name */}
			<h2 className='text-2xl uppercase font-bold overflow-y-hidden text-center mb-2 text-gray-900'>
				Krishnanshu Khanna
			</h2>

			{/* Accent Circle */}

			{/* Dotted Path */}
			<div>
				<svg
					className='absolute left-[0%] top-[63%] rotate-[174deg]'
					width='160' // Increased width
					height='60'
					viewBox='0 0 160 60' // Adjusted viewBox
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M15,60 Q90,7 320,60' // Extended curve to be longer
						stroke='#FF6B00'
						strokeWidth='3'
						strokeDasharray='8 8' // Slightly bigger dash for better visibility
						strokeLinecap='round'
						fill='none'
					/>
				</svg>

				{/* Flame Ball */}
				<div className='w-7 h-7 bg-[#FF6B00] overflow-y-hidden  text-white rounded-full md:left-[35%] md:top-[57%] top-[58%] left-[43%] absolute shadow-lg'>
					<Flame size={26} fill={"white"} />
				</div>
			</div>

			{/* Bio */}
			<div className='w-[80%] overflow-y-hidden z-100'>
				<p className='text-gray-600 uppercase text-center  mb-6 px-4 tracking-tighter text-sm leading-relaxed'>
					Aspiring Software Engineer crafting innovative solutions and pushing the
					limits of technology.
				</p>
			</div>

			{/* Social Links */}
			<div className='flex justify-center gap-6 '>
				{/* <a
					href='https://github.com/Krishnanshu-Khanna'
					className='text-orange-400 hover:text-[#FF6B00] transition overflow-y-hidden'>
					<Github size={24} />
				</a> */}
				<HoverLabelIcon
					icon={<Github size={24} color='#FF6B00' />}
					label='GitHub'
					href='https://github.com/Krishnanshu-Khanna'
				/>
				<HoverLabelIcon
					icon={<Linkedin size={24} color='#FF6B00' />}
					label='LinkedIn'
					href='https://www.linkedin.com/in/krishnanshu-khanna/'
				/>
				<HoverLabelIcon
					icon={<Mail size={24} color='#FF6B00' />}
					label='Email'
					href='mailto:krishnanshu.khanna@gmail.com'
				/>
				<HoverLabelIcon
					icon={<FileText size={24} color='#FF6B00' />}
					label='Resume'
					href='/resume'
				/>
				<HoverLabelIcon
					icon={<FaMediumM size={24} color='#FF6B00' />}
					label='Medium'
					href='https://medium.com/@krishnanshu.khanna'
				/>

				{/* <a
					href='https://www.linkedin.com/in/krishnanshu-khanna/'
					className='text-orange-400 hover:text-[#FF6B00] transition overflow-y-hidden'>
					<Linkedin size={24} />
				</a>
				<a
					href='mailto:krishnanshu.khanna@gmail.com'
					className='text-orange-400 hover:text-[#FF6B00] transition overflow-y-hidden'>
					<Mail size={24} />
				</a>
				<a
					href='https://drive.google.com/file/d/1xFGvttmHhaCJgnjfDqqv17runq8poL28/view?usp=drive_link'
					className='text-orange-400 hover:text-[#FF6B00] transition overflow-y-hidden'>
					<FileText size={24} />
				</a> */}
				{/* <a
					href=''
					className='text-orange-400 hover:text-[#FF6B00] transition overflow-y-hidden'>
					<Dribbble size={24} />
				</a> */}
			</div>
		</div>
	);
};
