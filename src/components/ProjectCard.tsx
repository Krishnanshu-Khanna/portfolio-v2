import { Github, Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	demoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	demoUrl,
}) => {
	return (
		<div className='flex flex-col md:flex-row items-center gap-6 p-6 border border-gray-800 bg-black rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105'>
			{/* Image Section */}
			<div className='w-full md:w-1/2 h-48 md:h-56 relative rounded-xl overflow-hidden'>
				<Image
					src={imageUrl}
					alt={title}
					layout='fill'
					objectFit='cover'
					className='transition-transform duration-300 hover:scale-110'
				/>
			</div>

			{/* Content Section */}
			<div className='w-full md:w-1/2 flex flex-col justify-between'>
				<h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
				<p className='text-gray-400 text-sm mb-4'>{description}</p>

				<div className='flex flex-col gap-3'>
					<Link href={demoUrl} target='_blank' rel='noopener noreferrer'>
						<span className='inline-flex items-center justify-center gap-2 w-full bg-stone-600 hover:bg-stone-500 text-white font-semibold py-3 rounded-lg transition-all duration-300'>
							<Link2Icon className="w-5 h-5"/>Live Demo
						</span>
					</Link>
					<Link href={demoUrl} target='_blank' rel='noopener noreferrer'>
						<span className='inline-flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-all duration-300'>
							<Github className='w-5 h-5' /> Github Repo
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
