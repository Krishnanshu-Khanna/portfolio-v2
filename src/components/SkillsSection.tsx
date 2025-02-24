"use client";

const SkillsSection = () => {
	return (
		<div className='py-10 px-6 text-white'>
			<h2 className='text-3xl font-bold text-center mb-6'>Technical Skills</h2>

			<div className='flex flex-wrap justify-center gap-4 text-lg'>
				<span className='bg-gray-800 text-white px-4 py-2 rounded-lg'>C++</span>
				<span className='bg-gray-800 text-white px-4 py-2 rounded-lg'>Python</span>
				<span className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
					JavaScript
				</span>
				<span className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
					React.js
				</span>
				<span className='bg-gray-800 text-white px-4 py-2 rounded-lg'>Next.js</span>
				<span className='bg-gray-800 text-white px-4 py-2 rounded-lg'>Node.js</span>
				<span className='bg-gray-800 text-white px-4 py-2 rounded-lg'>MongoDB</span>
				<span className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
					Tailwind CSS
				</span>
			</div>
		</div>
	);
};

export default SkillsSection;
