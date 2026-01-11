"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] md:text-[50px] pt-[5rem] pb-3 md:p-0 font-extrabold text-center text-white z-50 tracking-tight"
                        >
                            <span className="text-glow">About</span>
                            <span className="text-gradient-advanced ml-2">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-center relative md:mt-[150px] lg:mt-20 z-[20] w-auto h-auto min-h-[400px]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="glassmorphism-container w-full max-w-4xl mx-auto p-12 rounded-3xl border border-[#7042f84d] backdrop-blur-xl bg-[#0300145e] shadow-[0_8px_32px_0_rgba(112,66,248,0.3)] text-center"
                        >
                            <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 mb-4 tracking-tight text-glow">
                                Welcome to My Portfolio
                            </h2>
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                                Explore my DevOps journey and connect with me through the contact section below.
                            </p>
                        </motion.div>
                    )}
                </InView>
            </div>
            <div className="absolute z-[20] bottom-[-4rem] md:bottom-[10px] px-[5px]">
                <div className="cursive text-[22px] md:text-[24px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 text-glow-purple tracking-wide">
                    Building Tomorrow with Infrastructure and Automation
                </div>
            </div>

            <div className="w-full hidden md:flex items-start justify-center absolute top-[1px]">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="h-full"
                    src="/encryption.webm/"
                />
            </div>
        </section>
    );
};

export default About;