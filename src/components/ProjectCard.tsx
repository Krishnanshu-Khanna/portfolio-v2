import { Github, Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	demoUrl: string;
	className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	demoUrl,
	className
}) => {
	return (
<div
	className={`flex flex-col md:flex-row items-center gap-6 p-6 border border-gray-800 bg-black rounded-2xl shadow-xl transition-transform duration-300  ${
		className || ""
	}`}
>
			{/* Image Section */}
			<div className='w-full md:w-1/2 h-48 md:h-56 relative rounded-xl overflow-hidden'>
				<Image
					src={imageUrl}
					alt={title}
					layout='fill'
					objectFit='contain'
					className='transition-transform duration-300 hover:scale-110'
				/>
			</div>

			{/* Content Section */}
			<div className='w-full md:w-1/2 flex flex-col justify-between'>
				<h3 className='text-2xl font-bold text-stone-100 mb-2'>{title}</h3>
				<p className='text-stone-400 text-sm mb-4'>{description}</p>

				<div className='flex flex-col gap-3'>
					<Link href={demoUrl} target='_blank' rel='noopener noreferrer'>
						<span className='inline-flex items-center justify-center gap-2 w-full border-stone-600 border-2  text-stone-400 hover:bg-stone-600 hover:text-black font-semibold py-3 rounded-lg transition-all duration-300'>
							<Link2Icon className='w-5 h-5' />
							Live Demo
						</span>
					</Link>
					<Link href={demoUrl} target='_blank' rel='noopener noreferrer'>
						<span className='inline-flex items-center justify-center gap-2 w-full border-[#D64A1F] border-2 text-[#FF6B00] hover:bg-[#D64A1F] hover:text-black font-semibold py-3 rounded-lg transition-all duration-300'>
							<Github className='w-5 h-5' /> Github Repo
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
