"use client";

import { useEffect } from "react";

export default function ResumePage() {
	useEffect(() => {
		fetch("/api/log-resume-view", { method: "POST" });
	}, []);

	return (
		<iframe
			src='/Resume.pdf'
			style={{ width: "100%", height: "100vh", border: "none" }}
		/>
	);
}
