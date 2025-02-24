"use client";

const ContactSection = () => {
	return (
		<div className='py-10 px-6 text-center text-white'>
			<h2 className='text-3xl font-bold mb-4'>Contact Me</h2>
			<p className='mb-4'>
				📧 Email:{" "}
				<a href='mailto:krishnanshu.khanna@gmail.com' className='text-blue-400'>
					krishnanshu.khanna@gmail.com
				</a>
			</p>
			<p>
				🔗{" "}
				<a
					href='https://www.linkedin.com/in/krishnanshu-khanna/'
					target='_blank'
					className='text-blue-400'>
					LinkedIn
				</a>
			</p>
			<p>
				🔗{" "}
				<a
					href='https://github.com/Krishnanshu-Khanna'
					target='_blank'
					className='text-blue-400'>
					GitHub
				</a>
			</p>
		</div>
	);
};

export default ContactSection;
