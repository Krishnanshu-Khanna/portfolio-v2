import Script from "next/script";

export const metadata = {
    title: "Resume | Krishnanshu Khanna",
    keywords: ["Resume", "Krishnanshu Khanna", "Portfolio"],
    description: "Krishnanshu's Resume",
    favicon: "/favicon.ico",
};

export default function Layout({ children }: { children: React.ReactNode }) {
return (
    <>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V4PSRHMVPW"></Script>
        <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-V4PSRHMVPW');
                `,
            }}
        />
        {children}
    </>
);
}
