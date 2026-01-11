import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-screen md:w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 m-0 max-w-[1855px] items-center rounded-full">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px] md:px-[10px]">
                <a
                    href="#home"
                    className="h-auto w-auto flex flex-row items-center group transition-all duration-300 hover:scale-105"
                >
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="cursor-pointer transition-all duration-300 group-hover:rotate-180 group-hover:drop-shadow-[0_0_15px_rgba(112,66,248,0.6)] w-10"
                    />

                    <span className="font-extrabold ml-[10px] block text-white z-50 md:text-lg text-xl transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 tracking-wide">
                        Namra Patel
                    </span>
                </a>

                <div className="hidden w-3/6 lg:w-2/5 h-full md:flex flex-row items-center justify-between md:mx-auto lg:pr-12">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 transition-all duration-300 hover:border-[#7042f8] hover:shadow-[0_0_15px_rgba(112,66,248,0.3)] gap-4">
                        <a href="#skills" className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 whitespace-nowrap">
                            Skills
                        </a>
                        <a href="#services" className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 whitespace-nowrap">
                            Services
                        </a>
                        <a href="#projects" className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 whitespace-nowrap">
                            Projects
                        </a>
                        <a href="#certifications" className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 whitespace-nowrap">
                            Certifications
                        </a>
                        <a href="#contact" className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 whitespace-nowrap">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;