import type { Metadata } from "next";
import "./globals.css";
import {
	Poppins,
	Montserrat,
	Bebas_Neue,
	Nunito_Sans,
	Oswald,
	Playfair_Display,
} from "next/font/google";
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
			<body
				className={`${poppins.variable} ${nunitoSans.variable} ${montserrat.variable} ${bebasNeue.variable} ${oswald.variable} ${playfair.variable}`}>
				{children}
			</body>
		</html>
	);
}
