import { useState } from "react";
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
			className={`group relative w-[320px] md:w-[480px] h-[520px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${className}`}
			onMouseEnter={() => setShowDesc(true)}
			onMouseLeave={() => setShowDesc(false)}>
			{/* Background with glass morphism */}
			<div
				className='absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/10 to-black/20 border border-white/20'
				style={{
					background: `linear-gradient(135deg, ${top}15, ${bottom}25), rgba(255,255,255,0.05)`,
				}}></div>

			{/* Animated border gradient */}
			<div
				className='absolute inset-0 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500'
				style={{
					background: `linear-gradient(135deg, ${top}, ${bottom})`,
					padding: "2px",
				}}>
				<div className='w-full h-full rounded-3xl bg-black/90 backdrop-blur-xl'></div>
			</div>

			{/* Content Container */}
			<div className='relative z-10 h-full flex flex-col p-8'>
				{/* Header Section */}
				<div className='flex items-start justify-between mb-6'>
					<div className='flex-1'>
						<h2 className='text-2xl md:text-3xl font-bold text-white mb-2 leading-tight tracking-tight'>
							{title}
						</h2>
						<p className='text-sm md:text-base text-gray-300 font-medium opacity-90'>
							{subtitle}
						</p>
					</div>

					{/* Grade Badge */}
					<div className='ml-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3'>
						<div
							className='w-3 h-3 rounded-full animate-pulse'
							style={{ backgroundColor: top }}></div>
						<span className='text-sm font-semibold text-white'>{grade}</span>
					</div>
				</div>

				{/* Image/Description Container */}
				<div className='flex-1 flex items-center justify-center relative overflow-hidden rounded-2xl'>
					{!showDesc ? (
						<div className='relative w-full h-full flex items-center justify-center rounded-2xl'>
							{/* Fixed container for image containment */}
							<div className='relative w-full h-[280px]  rounded-xl shadow-lg backdrop-blur-sm flex items-center justify-center overflow-hidden'>
								<Image
									src={image}
									alt={title}
									className='max-w-full max-h-full p-6 object-contain transition-transform duration-500 group-hover:scale-110 logo-glow'
									width={300}
									height={260}
								/>
							</div>
						</div>
					) : (
						<div className='w-full h-full bg-black/85 backdrop-blur-md rounded-2xl border border-white/30 p-4 flex flex-col shadow-2xl'>
							{/* Scrollable text container */}
							<div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent'>
								<div className='text-left p-2'>
									<p className='text-[5px] md:text-base text-white leading-relaxed font-normal shadow-text'>
										{description}
									</p>
								</div>
							</div>
							{/* Scroll indicator */}
							<div className='text-center mt-2 opacity-70'>
								<div className='text-xs text-white/60'>Scroll for more</div>
							</div>
						</div>
					)}
				</div>

				{/* Decorative Elements */}
				<div
					className='absolute top-6 right-6 w-20 h-20 rounded-full opacity-20 blur-xl'
					style={{ backgroundColor: top }}></div>
				<div
					className='absolute bottom-6 left-6 w-16 h-16 rounded-full opacity-15 blur-xl'
					style={{ backgroundColor: bottom }}></div>

				{/* Hover Indicator */}
				<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
					<div className='flex space-x-1'>
						<div className='w-2 h-2 rounded-full bg-white/60'></div>
						<div className='w-2 h-2 rounded-full bg-white/40'></div>
						<div className='w-2 h-2 rounded-full bg-white/20'></div>
					</div>
				</div>
			</div>

			{/* Subtle glow effect on hover */}
			<div
				className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10'
				style={{
					boxShadow: `0 25px 50px -12px ${top}40, 0 0 0 1px ${top}20`,
				}}></div>
		</div>
	);
};
export default Card;
