"use client";

import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    onClick?: () => void;
}

const ProjectCard = ({ src, title, description, onClick }: Props) => {
    const handleClick = () => {
        console.log("ProjectCard clicked!");
        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            onClick={handleClick}
            className="relative z-40 pointer-events-auto glassmorphism-container overflow-hidden rounded-2xl border border-[#7042f84d] backdrop-blur-xl bg-[#0300145e] shadow-[0_8px_32px_0_rgba(112,66,248,0.3)] transition-all duration-300 hover:border-[#7042f8] hover:shadow-[0_8px_32px_0_rgba(112,66,248,0.5)] hover:scale-[1.02] group flex flex-col h-full cursor-pointer"
        >
            {/* Gradient Header with Icon */}
            <div className="relative w-full h-24 bg-gradient-to-br from-[#7042f8] via-[#5a32c8] to-[#4a22a8] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-40"></div>
                <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-1.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="relative p-5 flex flex-col flex-grow">
                <h1 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                    {title}
                </h1>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-300 flex-grow line-clamp-4">
                    {description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#7042f84d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-purple-400 text-xs font-semibold flex items-center gap-1">
                        View Details
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;