"use client";
import HomeSection from "@/components/HomeSection";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
	const location = usePathname();
	const [loading, setLoading] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);

	// Ensure it runs only on the client
	useEffect(() => {
		setHasMounted(true);

		// Avoid Loader on reload
		const hasVisited = sessionStorage.getItem("hasVisited");
		if (hasVisited) {
			setLoading(false);
			return;
		}

		// Show loader only on first visit
		if (location === "/") {
			setLoading(true);
			sessionStorage.setItem("hasVisited", "true");

			const timer = setTimeout(() => {
				setLoading(false);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [location]);

	// Prevent SSR hydration issues
	if (!hasMounted) return null;

	if (loading) return <Loader onComplete={() => setLoading(false)} />;
	return (
		<div className='w-full bg-black text-black flex flex-col gap-2'>
			<Navbar />
			<section className="">
				<HomeSection />
			</section>
		</div>
	);
};

export default Page;
