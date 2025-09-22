import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {PortfolioProvider} from "@/lib/context/PortfolioContext";
import SwitchDark from "../components/switch/SwitchDark";
import Navigation from "../components/Navigation";
import {ThemeProvider} from "next-themes";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Rayhanul Sumon - Full Stack Developer Portfolio",
    description:
        "Portfolio of Rayhanul Sumon - Full Stack Web Developer specializing in React, Next.js, Laravel, and modern web technologies.",
    keywords:
        "Rayhanul Sumon, Full Stack Developer, React, Next.js, Laravel, Web Developer, Portfolio",
    authors: [{name: "Rayhanul Sumon"}],
    creator: "Rayhanul Sumon",
    openGraph: {
        title: "Rayhanul Sumon - Full Stack Developer Portfolio",
        description: "Portfolio of Rayhanul Sumon - Full Stack Web Developer",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SwitchDark/>
            <Navigation/>
            <PortfolioProvider>
                {children}
            </PortfolioProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}