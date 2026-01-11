"use client";

import {
    Backend_skill,
    DevTools,
    Frontend_skill,
	libraries,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-fit relative py-20"
            style={{ transform: "scale(0.9" }}
        >
            <SkillText />

            <div className="flex flex-col items-center justify-center w-[95%] max-w-6xl mx-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="glassmorphism-container relative w-full py-[30px] px-[30px] rounded-3xl border border-[#7042f84d] backdrop-blur-xl bg-[#0300145e] shadow-[0_8px_32px_0_rgba(112,66,248,0.3)] transition-all duration-300 hover:border-[#7042f8] hover:shadow-[0_8px_32px_0_rgba(112,66,248,0.5)] hover:scale-[1.01] overflow-visible"
                        >
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 my-8 items-center justify-items-center overflow-visible">
                                {[...Frontend_skill, ...Backend_skill, ...DevTools, ...libraries].map((image, index) => (
                                    <SkillDataProvider
                                        key={index}
                                        src={image.Image}
                                        width={image.width}
                                        height={image.height}
                                        index={index}
                                        skill_name={image.skill_name}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="hidden md:block w-full h-full absolute top-24">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
