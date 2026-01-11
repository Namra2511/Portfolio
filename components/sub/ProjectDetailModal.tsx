"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface ProjectDetail {
    src: string;
    title: string;
    description: string;
    architecture?: string;
    implementation?: string[];
    monitoring?: string;
    security?: string;
    techStack?: string[];
    results?: string[];
    isConfidential?: boolean;
}

interface Props {
    project: ProjectDetail | null;
    onClose: () => void;
}

const ProjectDetailModal = ({ project, onClose }: Props) => {
    useEffect(() => {
        if (project) {
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            // Re-enable body scroll when modal closes
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 pt-20 bg-black bg-opacity-70 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="modal-scrollbar relative w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-[#030014] border border-[#7042f8] rounded-3xl shadow-[0_8px_32px_0_rgba(112,66,248,0.5)] animate-slideUp mt-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="sticky top-4 right-4 float-right z-10 bg-[#7042f8] bg-opacity-80 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-100 transition-all duration-300 hover:scale-110 m-4"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="px-6 md:px-8 pb-8 pt-4 space-y-6 clear-both">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 leading-tight">
                        {project.title}
                    </h1>

                    {/* Confidentiality Notice */}
                    {project.isConfidential && (
                        <div className="bg-[#7042f8] bg-opacity-10 border border-[#7042f8] rounded-xl p-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#7042f8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <p className="text-sm font-semibold text-purple-300">Confidential Company Project</p>
                                    <p className="text-xs text-gray-400 mt-1">Source code and specific implementation details are proprietary and cannot be shared publicly.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Description */}
                    <div>
                        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <span className="text-[#7042f8]">📋</span>
                            <span className="text-glow">Project</span>
                            <span className="text-glow ml-1">Overview</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Architecture */}
                    {project.architecture && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span className="text-[#7042f8]">🏗️</span>
                                <span className="text-glow">Architecture</span>
                                <span className="text-glow ml-1">Overview</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed">{project.architecture}</p>
                        </div>
                    )}

                    {/* Implementation */}
                    {project.implementation && project.implementation.length > 0 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span className="text-[#7042f8]">⚙️</span>
                                <span className="text-glow">Implementation</span>
                                <span className="text-glow ml-1">Details</span>
                            </h2>
                            <ul className="space-y-2">
                                {project.implementation.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-purple-400 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Monitoring & Security */}
                    {(project.monitoring || project.security) && (
                        <div className="space-y-4">
                            {project.monitoring && (
                                <div>
                                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <span className="text-[#7042f8]">📊</span>
                                        <span className="text-glow">Monitoring &</span>
                                        <span className="text-glow ml-1">Observability</span>
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">{project.monitoring}</p>
                                </div>
                            )}

                            {project.security && (
                                <div>
                                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <span className="text-[#7042f8]">🔒</span>
                                        <span className="text-glow">Security &</span>
                                        <span className="text-glow ml-1">Infrastructure</span>
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">{project.security}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span className="text-[#7042f8]">🛠️</span>
                                <span className="text-glow">Tools &</span>
                                <span className="text-glow ml-1">Technology Stack</span>
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-[#7042f8] bg-opacity-20 border border-[#7042f8] rounded-full text-sm text-purple-300 font-medium hover:bg-opacity-30 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Results */}
                    {project.results && project.results.length > 0 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span className="text-[#7042f8]">🎯</span>
                                <span className="text-glow">Results</span>
                                <span className="text-glow ml-1">Achieved</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.results.map((result, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#7042f8] bg-opacity-10 border border-[#7042f84d] rounded-xl p-4 hover:border-[#7042f8] transition-all duration-300"
                                    >
                                        <p className="text-gray-200 text-sm">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;
