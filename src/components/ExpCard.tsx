import { useState } from "react";
import Bg from "E://portfolio-v2/public/images/bg.png";
import Image from "next/image";

interface CardProps {
	title: string;
	subtitle: string;
	grade?: string;
	backgroundColors: {
		top: string;
		bottom: string;
	};
	className?: string;
	description?: string;
	image: string;
}

const Card: React.FC<CardProps> = ({
	title,
	subtitle,
	grade,
	backgroundColors,
	description,
	className = "",
	image,
}) => {
	const { top, bottom } = backgroundColors;
    const [showDesc, setShowDesc] = useState(false);
	return (
		<div
			className={
				"card flex flex-col justify-evenly items-center p-5 rounded-4xl relative text-white overflow-hidden  w-[280px] md:w-fit z-10 hover:-translate-y-10 transition-all duration-300 " +
				className
			}
			style={{
				background: `linear-gradient(to bottom, ${top}, ${bottom})`,
			}}
			onMouseEnter={() => setShowDesc(true)}
			onMouseLeave={() => setShowDesc(false)}>
			<div className='inset-0 absolute z-0'>
				<Image
					src={Bg}
					alt='background'
					className='w-full h-full object-cover opacity-10'
					fill={true}
				/>
			</div>
			<div className='flex items-center justify-between z-10'>
				<div>
					<h2 className='md:text-2xl text-md font-bold mb-0.5'>{title}</h2>
					<p className='md:text-xs text-[10px] opacity-70'>{subtitle}</p>
				</div>
				<div className='bg-[rgba(0,0,0,0.4)] flex items-center pl-1 pr-2 py-1 rounded-3xl gap-2'>
					<div className='icon md:h-[25px] md:w-[25px] h-[10px] w-[10px] rounded-full grid place-content-center bg-white'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='10'
							height='10'
							fill={top}
							viewBox='0 0 256 256'>
							<path d='M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z'></path>
						</svg>
					</div>
					<p className='md:text-xs text-[10px] '>{grade}</p>
				</div>
			</div>
			{!showDesc&&<Image
				src={image}
				alt={title}
				className='w-full max-w-[250px] h-[150px] object-contain mt-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] mx-auto mb-7'
				width={250}
				height={150}
			/>}

			{showDesc&&<div className='md:w-[450px] w-[200px]'>
				<p className='md:text-xs text-[10px]'>{description}</p>
			</div>}
		</div>
	);
};
export default Card;
