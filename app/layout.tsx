import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {PortfolioProvider} from "@/lib/context/PortfolioContext";
import SwitchDark from "../components/switch/SwitchDark";
import Navigation from "../components/Navigation";
import {ThemeProvider} from "next-themes";
import React from "react";

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
        url: "https://sumon.dev/", // Add your canonical URL
        images: [
            {
                url: "/images/hero/sumon.jpg", // Use a relevant image path
                width: 1200,
                height: 630,
                alt: "Rayhanul Sumon - Full Stack Developer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rayhanul Sumon - Full Stack Developer Portfolio",
        description: "Portfolio of Rayhanul Sumon - Full Stack Web Developer",
        creator: "@sumonwebdev", // Replace with your Twitter handle
        images: [
            "/images/hero/sumon.jpg"
        ],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/images/hero/sumon.jpg",
    },
    metadataBase: new URL("https://sumon.dev"),
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-black dark:bg-black dark:text-white`}> {/* Add fallback font and color classes */}
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