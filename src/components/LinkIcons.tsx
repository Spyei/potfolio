import githubIcon from "../assets/svg/github.svg";
import discordIcon from "../assets/svg/discord.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import whatsappIcon from "../assets/svg/whatsapp.svg";
import React, { useState } from "react";

export const LinkIcons: React.FC = () => {
    const [isHovering, setHover] = useState<boolean>(false);

    return (
        <div
            className={`flex text-white flex-col my:flex-row my:items-center my:justify-center mr-4 my:h-[100px] h-[180px]`}
        >
            <a
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                className="text-white w-[100%] flex gap-2 items-center justify-start transition-all h-[40px] duration-300"
                href="https://github.com/spyei"
            >
                <img className="h-[30px]" src={githubIcon} alt="Github Icon" />
                <div
                    className={`transition-all duration-300 text-center flex items-center justify-center  text-neutral-300 hover:text-white ${
                        isHovering ? "text-[16px] ml-2" : "text-[0px]"
                    }`}
                >
                    Github
                </div>
            </a>
            <a
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                className="w-[100%] flex gap-2 items-center justify-start transition-all h-[40px] duration-300"
                href="https://discord.com/users/955095844275781693"
            >
                <img
                    className="h-[30px]"
                    src={discordIcon}
                    alt="Discord Icon"
                />
                <div
                    className={`transition-all duration-300 text-center  text-neutral-300 hover:text-white ${
                        isHovering ? "text-[16px] ml-1" : "text-[0px]"
                    }`}
                >
                    Discord
                </div>
            </a>
            <a
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                className="w-[100%] flex gap-2 items-center justify-start transition-all h-[40px] duration-300"
                href="https://www.instagram.com/caiuwu_/"
            >
                <img
                    className="h-[30px]"
                    src={instagramIcon}
                    alt="Instagram Icon"
                />
                <div
                    className={`transition-all duration-300 text-center  text-neutral-300 hover:text-white ${
                        isHovering ? "text-[16px]" : "text-[0px]"
                    }`}
                >
                    Instagram
                </div>
            </a>
            <a
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                className="w-[100%] flex gap-2 items-center justify-start transition-all h-[40px] duration-300"
                href="/"
            >
                <img
                    className="h-[30px]"
                    src={whatsappIcon}
                    alt="Whatsapp Icon"
                />
                <div
                    className={`transition-all duration-300 text-center  text-neutral-300 hover:text-white ${
                        isHovering ? "text-[16px]" : "text-[0px]"
                    }`}
                >
                    Whatsapp
                </div>
            </a>
        </div>
    );
};
