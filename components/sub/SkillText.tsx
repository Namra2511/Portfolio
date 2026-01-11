"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";

const SkillText = () => {
    return (
        <div className="w-full h-auto pt-20 flex flex-col items-center justify-center">
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
                            My Skills{" "}
                        </span>
                    </motion.div>
                )}
            </InView>

        </div>
    );
};

export default SkillText;