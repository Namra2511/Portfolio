"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    skill_name?: string;
}

const SkillDataProvider = ({ src, width, height, index, skill_name }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    const [isHovered, setIsHovered] = useState(false);

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const animationDelay = 0.1;
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay, duration: 0.4 }}
            className="relative flex flex-col items-center justify-center gap-2 overflow-visible group w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`transition-all duration-300 cursor-pointer p-4 rounded-xl z-10 flex items-center justify-center ${
                isHovered ? 'scale-125 drop-shadow-[0_0_20px_rgba(112,66,248,0.8)] bg-[#7042f81a] border border-[#7042f84d]' : 'hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(112,66,248,0.6)]'
            }`}>
                <Image 
                    src={src} 
                    width={width * 1.5} 
                    height={height * 1.5} 
                    alt={skill_name || "skill image"} 
                    className={`transition-all duration-300 ${isHovered ? 'brightness-125' : 'group-hover:brightness-110'}`}
                />
            </div>
            {skill_name && (
                <div className="text-center w-full">
                    <span className="text-white text-xs md:text-sm font-medium transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 block">
                        {skill_name}
                    </span>
                </div>
            )}
        </motion.div>
    );
};

export default SkillDataProvider;