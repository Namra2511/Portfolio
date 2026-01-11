import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2 group">
                            <FaYoutube className="transition-all duration-300 group-hover:scale-125 group-hover:text-purple-400" />
                            <span className="text-[15px] ml-[6px]">
                                Youtube
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2 group">
                            <RxGithubLogo className="transition-all duration-300 group-hover:scale-125 group-hover:text-purple-400" />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2 group">
                            <RxDiscordLogo className="transition-all duration-300 group-hover:scale-125 group-hover:text-purple-400" />
                            <span className="text-[15px] ml-[6px]">
                                Discord
                            </span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2 group">
                            <FaYoutube className="transition-all duration-300 group-hover:scale-125 group-hover:text-purple-400" />
                            <span className="text-[15px] ml-[6px]">
                                Instagram
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2 group">
                            <RxGithubLogo className="transition-all duration-300 group-hover:scale-125 group-hover:text-purple-400" />
                            <span className="text-[15px] ml-[6px]">
                                Twitter
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2 group">
                            <RxDiscordLogo className="transition-all duration-300 group-hover:scale-125 group-hover:text-purple-400" />
                            <span className="text-[15px] ml-[6px]">
                                Linkedin
                            </span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2">
                            <span className="text-[15px] ml-[6px]">
                                Become Sponsor
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2">
                            <span className="text-[15px] ml-[6px]">
                                Learning about me
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:translate-x-2">
                            <span className="text-[15px] ml-[6px]">
                                mifwebchain@gmail.com
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; WebChain Dev 2023 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;