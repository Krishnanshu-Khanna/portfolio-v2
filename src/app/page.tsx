"use client";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HomeSection from "@/components/HomeSection";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
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
			{/* Home Section */}
			<section id='home' className='min-h-screen'>
				<HomeSection />
			</section>

			{/* Experience Section (Education & Internships) */}
			<section id='experiences' className='min-h-screen'>
				<ExperienceSection />
			</section>

			{/* Projects Section */}
			<section id='projects' className='min-h-screen'>
				<ProjectSection />
			</section>

			{/* Skills Section */}
			<section id='skills' className='min-h-screen'>
				<SkillsSection />
			</section>

			{/* Contact Section */}
			<section id='contact' className='min-h-screen'>
				<ContactSection />
			</section>
		</div>
	);
};

export default Page;
