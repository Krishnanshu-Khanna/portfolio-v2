"use client";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface HoverLabelIconProps {
	icon: React.ReactElement;
	label: string;
	href: string;
}

const HoverLabelIcon = ({ icon, label, href }: HoverLabelIconProps) => {
	const labelRef = useRef<HTMLSpanElement | null>(null);

	const handleMouseEnter = () => {
		gsap.to(labelRef.current, {
			opacity: 1,
			y: 0,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = () => {
		gsap.to(labelRef.current, {
			opacity: 0,
			y: -5,
			duration: 0.3,
			ease: "power2.in",
		});
	};

	return (
		<Link
			href={href}
			target="_blank"
			rel='noopener noreferrer'
			className='flex flex-col items-center justify-center relative group text-white'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{icon}
			<span
				ref={labelRef}
				className='absolute top-full mt-1 text-sm bg-gray-800 text-white px-2 py-1 rounded-md shadow-lg opacity-0 transform translate-y-[-5px]'>
				{label}
			</span>
		</Link>
	);
};

export default HoverLabelIcon;
