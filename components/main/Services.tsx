"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import {
    FaSync,
    FaCloud,
    FaDocker,
    FaShieldAlt,
    FaGlobe
} from "react-icons/fa";

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    {
        id: "cicd-automation",
        title: "CI/CD Automation",
        description: "Automate your software delivery pipeline with continuous integration and deployment workflows. Streamline builds, tests, and deployments for faster release cycles.",
        icon: <FaSync className="text-4xl" />
    },
    {
        id: "cloud-infra",
        title: "Cloud Infrastructure Configuration",
        description: "Design and configure scalable cloud infrastructure using Infrastructure as Code. Set up and manage cloud resources efficiently on AWS, Azure, or GCP.",
        icon: <FaCloud className="text-4xl" />
    },
    {
        id: "container-deployment",
        title: "Container-Based Deployment",
        description: "Deploy and orchestrate containerized applications using Docker and Kubernetes. Ensure scalable, resilient, and portable application deployments.",
        icon: <FaDocker className="text-4xl" />
    },
    {
        id: "security-practices",
        title: "Implement Security Best Practices",
        description: "Enhance your infrastructure security with industry best practices. Implement secure configurations, access controls, and compliance standards.",
        icon: <FaShieldAlt className="text-4xl" />
    },
    {
        id: "website-hosting",
        title: "Static and Dynamic Website Hosting",
        description: "Host and deploy both static and dynamic websites with high availability and performance. Set up CDN, load balancing, and automated deployments.",
        icon: <FaGlobe className="text-4xl" />
    }
];

const Services = () => {
    return (
        <section
            id="services"
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
                            <span className="text-gradient-advanced">Services Provided</span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 md:gap-12 w-full max-w-7xl mx-auto mt-[150px] md:mt-[100px] px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
                    {services.map((service, index) => (
                        <InView key={service.id} triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={
                                        index % 3 === 0
                                            ? slideInFromLeft(0.5)
                                            : index % 3 === 1
                                                ? slideInFromTop
                                                : slideInFromRight(0.5)
                                    }
                                    className="flex flex-col items-center justify-center"
                                >
                                    <div className="glassmorphism-container relative w-full h-full p-8 rounded-3xl border border-[#7042f84d] backdrop-blur-xl bg-[#0300145e] shadow-[0_8px_32px_0_rgba(112,66,248,0.3)] hover:border-[#7042f8] hover:shadow-[0_8px_32px_0_rgba(112,66,248,0.5)] transition-all duration-300 hover:scale-105 flex flex-col items-center gap-6 z-[30] cursor-default"
                                        style={{ pointerEvents: "auto" }}
                                    >
                                        <div className="p-6 rounded-full bg-[#7042f81a] border border-[#7042f84d] group-hover:bg-[#7042f84d] transition-all duration-300 flex items-center justify-center text-[#b49bff] hover:text-cyan-400">
                                            {service.icon}
                                        </div>

                                        <div className="text-center">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                                                {service.description}
                                            </p>
                                        </div>
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

export default Services;

