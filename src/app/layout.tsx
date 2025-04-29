import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import {
	Poppins,
	Montserrat,
	Bebas_Neue,
	Nunito_Sans,
	Oswald,
	Playfair_Display,
} from "next/font/google";
import Head from "next/head";
export const metadata: Metadata = {
	title: "Krishnanshu - Portfolio",
	description:
		"This is the portfolio website of Krishnanshu showcasing projects and skills.",
};

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	weight: ["200", "300", "400", "600", "700", "800", "900"],
	display: "swap",
	variable: "--font-nunito",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	variable: "--font-poppins",
});
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	variable: "--font-montserrat",
});
const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
	variable: "--font-bebas",
});
const oswald = Oswald({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
	display: "swap",
	variable: "--font-oswald",
});
const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	display: "swap",
	variable: "--font-playfair",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Head>
				<title>Krishnanshu Khanna | Full Stack Developer</title>
				<meta
					name='description'
					content='Official portfolio of Krishnanshu Khanna – Full Stack Developer skilled in React, Node.js, and MongoDB. View projects and contact information.'
				/>
				<meta
					name='keywords'
					content='Krishnanshu Khanna, Full Stack Developer, Portfolio, krishnanshu.site'
				/>
				<meta name='author' content='Krishnanshu Khanna' />
				<meta
					property='og:title'
					content='Krishnanshu Khanna | Full Stack Developer'
				/>
				<meta
					property='og:description'
					content='Explore the projects and skills of Krishnanshu Khanna, software developer.'
				/>
				<meta property='og:url' content='https://krishnanshu.site' />
				<meta property='og:type' content='website' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Krishnanshu Khanna",
							url: "https://krishnanshu.site",
							sameAs: [
								"https://www.linkedin.com/in/krishnanshu-khanna/",
								"https://github.com/Krishnanshu-Khanna",
								"medium.com/@krishnanshu.khanna",
							],
							jobTitle: "Full Stack Developer",
						}),
					}}></script>
			</Head>

			<body
				className={`${poppins.variable} ${nunitoSans.variable} ${montserrat.variable} ${bebasNeue.variable} ${oswald.variable} ${playfair.variable}`}>
				<Script
					strategy='afterInteractive'
					src='https://www.googletagmanager.com/gtag/js?id=G-5LMZFV6YTK'
				/>
				<Script id='google-analytics' strategy='afterInteractive'>
					{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5LMZFV6YTK');
    `}
				</Script>
				{children}
			</body>
		</html>
	);
}
