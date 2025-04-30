// app/api/log-resume-view/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
	const headers = req.headers;
    const ip = req.headers.get("x-forwarded-for") || "8.8.8.8"; // fallback to demo IP

	const res = await fetch(`http://ip-api.com/json/${ip}`);
	const location = await res.json();
	const log = {
		timestamp: new Date().toISOString(),
		ip: ip,
        location: {
            country: location.country || "unknown",
            region: location.regionName || "unknown",
            city: location.city || "unknown",
            lat: location.lat || 0,
            lon: location.lon || 0,
        },
        utmSource: headers.get("utm_source") || "direct",
		referrer: headers.get("referer") || "direct",
		userAgent: headers.get("user-agent") || "unknown",
	};

	try {
		await addDoc(collection(db, "resumeViews"), log);
		return NextResponse.json({ status: "logged" });
	} catch (error) {
		console.error("Error logging resume view:", error);
		return NextResponse.json({ error: "Failed to log view" }, { status: 500 });
	}
}
