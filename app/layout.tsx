import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const StarsCanvas = dynamic(
    () => import("@/components/main/StarBackground"),
    { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto`}
            >
                <StarsCanvas />
                <Navbar />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
