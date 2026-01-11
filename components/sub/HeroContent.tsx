"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex flex-col items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
                >
                    {/* Glassmorphism Container with Content and Photo */}
                    <div className="glassmorphism-container relative w-full max-w-6xl mx-auto p-8 md:p-12 rounded-3xl border border-[#7042f84d] backdrop-blur-xl bg-[#0300145e] shadow-[0_8px_32px_0_rgba(112,66,248,0.3)] flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center text-center md:text-start">
                        {/* Content Section - Left Side */}
                        <div className="flex flex-col gap-5 justify-center w-full md:w-auto flex-1">
                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromLeft(0.5)}
                                        className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-extrabold text-white max-w-[600px] w-auto h-auto z-20 leading-tight"
                                    >
                                        <span className="tracking-tight text-glow">
                                            Building
                                            <span className="text-gradient-advanced ml-2">
                                                {" "}
                                                Infrastructure{" "}
                                            </span>
                                            that
                                            <span className="text-gradient-advanced ml-2">
                                                {" "}
                                                Scales{" "}
                                            </span>
                                            and delivers excellence
                                        </span>
                                    </motion.div>
                                )}
                            </InView>

                            <InView triggerOnce={false}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        variants={slideInFromLeft(0.8)}
                                        className="text-base md:text-lg text-gray-300 my-5 max-w-[650px] z-30 font-medium leading-relaxed"
                                    >
                                        <li className="mb-3">
                                            <span className="text-gray-400 mr-2">▸</span>
                                            Expert in CI/CD pipelines and automation
                                        </li>
                                        <li className="mb-3">
                                            <span className="text-gray-400 mr-2">▸</span>
                                            Cloud infrastructure management (AWS, Azure, GCP)
                                        </li>
                                        <li className="mb-3">
                                            <span className="text-gray-400 mr-2">▸</span>
                                            Container orchestration with Kubernetes and Docker
                                        </li>
                                        <li className="mb-3">
                                            <span className="text-gray-400 mr-2">▸</span>
                                            Infrastructure as Code with Terraform and Ansible
                                        </li>
                                    </motion.div>
                                )}
                            </InView>

                        </div>

                        {/* Photo Section - Right Side */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="flex flex-col items-center justify-center w-full md:w-auto flex-shrink-0"
                                >
                                    <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500">
                                        <img
                                            src="/namra.jpg"
                                            alt="profile"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="Welcome-box px-[15px] py-[8px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
                                        <h1 className="Welcome-text text-[20px] md:text-[24px] font-extrabold tracking-wide text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400">
                                            Namra Patel
                                        </h1>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;