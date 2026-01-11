"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

interface Certification {
    id: string;
    title: string;
    issuer: string;
    image: string;
    link?: string;
    issueDate?: string;
}

const certifications: Certification[] = [
    {
        id: "aws-cloud-practitioner",
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        image: "/certifications/AWS-1.png",
        link: "https://www.credly.com/badges/ed575202-7af0-4a4f-8e39-bb3db1075e97/linked_in_profile",
        issueDate: ""
    },
    {
        id: "aws-solutions-architect",
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        image: "/certifications/AWS-2.png",
        link: "https://aws.amazon.com/verification",
        issueDate: ""
    }
];

const Certifications = () => {
    return (
        <section
            id="certifications"
            className="flex flex-col items-center justify-center min-h-screen w-full h-full relative py-20 z-[30]"
            style={{ pointerEvents: "auto" }}
        >
            <div className="absolute w-auto h-auto top-[80px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] md:text-[50px] pt-[5rem] pb-3 md:p-0 font-extrabold text-center text-white z-50 tracking-tight"
                        >
                            <span className="text-gradient-advanced">
                                {" "}
                                Certifications{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 md:gap-16 w-full max-w-6xl mx-auto mt-[150px] md:mt-[100px] px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full">
                    {certifications.map((cert, index) => (
                        <InView key={cert.id} triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <div className="glassmorphism-container relative w-full p-8 rounded-3xl border border-[#7042f84d] backdrop-blur-xl bg-[#0300145e] shadow-[0_8px_32px_0_rgba(112,66,248,0.3)] hover:border-[#7042f8] hover:shadow-[0_8px_32px_0_rgba(112,66,248,0.5)] transition-all duration-300 hover:scale-105 flex flex-col items-center gap-6 z-[30]"
                                        style={{ pointerEvents: "auto" }}
                                    >
                                        {cert.link && cert.link.trim() !== "" ? (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col items-center gap-6 w-full cursor-pointer group relative z-[50]"
                                                style={{ pointerEvents: "auto", position: "relative" }}
                                            >
                                                <div className="relative w-full max-w-[300px] h-auto aspect-square flex items-center justify-center">
                                                    <Image
                                                        src={cert.image}
                                                        alt={cert.title}
                                                        width={300}
                                                        height={300}
                                                        className="object-contain w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = "none";
                                                        }}
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                        {cert.title}
                                                    </h3>
                                                    <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                                                    {cert.issueDate && (
                                                        <p className="text-gray-400 text-xs">Issued: {cert.issueDate}</p>
                                                    )}
                                                    <p className="text-purple-400 text-sm mt-3 font-semibold group-hover:text-cyan-400 transition-colors duration-300 underline cursor-pointer relative z-[50]"
                                                        style={{ pointerEvents: "auto" }}
                                                    >
                                                        Verify Certification →
                                                    </p>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex flex-col items-center gap-6 w-full">
                                                <div className="relative w-full max-w-[300px] h-auto aspect-square flex items-center justify-center">
                                                    <Image
                                                        src={cert.image}
                                                        alt={cert.title}
                                                        width={300}
                                                        height={300}
                                                        className="object-contain w-full h-auto"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = "none";
                                                        }}
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                        {cert.title}
                                                    </h3>
                                                    <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                                                    {cert.issueDate && (
                                                        <p className="text-gray-400 text-xs">Issued: {cert.issueDate}</p>
                                                    )}
                                                    {(!cert.link || cert.link.trim() === "") && (
                                                        <p className="text-gray-500 text-xs mt-2 italic">
                                                            Verification link coming soon
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

