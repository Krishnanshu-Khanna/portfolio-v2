import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import "./Loader.css";
const Loader = ({ onComplete }: { onComplete: () => void }) => {
	useEffect(() => {
		const tl = gsap.timeline({
			onComplete: () => {
				onComplete(); // Call the function to hide loader
			},
		});

		tl.to(".letters.left .letter", {
			x: "-100vw",
			ease: "power2.inOut",
			stagger: 0.1,
			duration: 2,
		})
			.to(
				".letters.right .letter",
				{
					x: "100vw",
					ease: "power2.inOut",
					stagger: 0.1,
					duration: 2,
				},
				"-=2"
			)
			.to(".loader", {
				opacity: 0,
				duration: 0.5,
			});

		gsap.to(".loader-img", {
			scale: 1.4,
			rotation: 360,
			duration: 2,
			ease: "power2.inOut",
		});
	}, [onComplete]);

	return (
		<div className='loader fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50'>
			<div className='header flex space-x-4'>
				<div className='letters left flex space-x-2'>
					<div className='letter text-white'>k</div>
					<div className='letter text-white'>r</div>
					<div className='letter text-white'>i</div>
					<div className='letter text-white'>s</div>
					<div className='letter text-white'>h</div>
				</div>
				<div className='letters right flex space-x-2'>
					<div className='letter text-white'>n</div>
					<div className='letter text-white'>a</div>
					<div className='letter text-white'>n</div>
					<div className='letter text-white'>s</div>
					<div className='letter text-white'>h</div>
					<div className='letter text-white'>u</div>
				</div>
			</div>
			<div className='img-holder'>
				<Image src='/images/hero6.jpg' alt='loader' width={300} height={300} className='loader-img' />
			</div>
		</div>
	);
};

export default Loader;
