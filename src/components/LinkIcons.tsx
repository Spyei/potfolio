import githubIcon from "../assets/svg/github.svg";
import discordIcon from "../assets/svg/discord.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import whatsappIcon from "../assets/svg/whatsapp.svg";
import React, { useState } from "react";

export const LinkIcons: React.FC = () => {
    const [gitHover, setGitHover] = useState<boolean>();
    const [discordHover, setDiscordHover] = useState<boolean>();
    const [instaHover, setInstaHover] = useState<boolean>();
    const [whatsHover, setWhatsHover] = useState<boolean>();

    return (
        <div
            className={`text-white flex-col my:flex-row my:items-center my:justify-center my:mb-[0px] mb-[85px] my:mr-0 mr-4 my:h-[100px] h-[180px]`}
        >
            <div>
                <a
                    onMouseEnter={() => setGitHover(true)}
                    onMouseLeave={() => setGitHover(false)}
                    className="text-white w-[100%] flex gap-2 items-center justify-end transition-all h-[40px] duration-300"
                    href="https://github.com/spyei"
                >
                    <img className="h-[30px]" src={githubIcon} alt="Github Icon" />
                    <div
                        className={`transition-all duration-300 text-center flex items-center justify-center  text-neutral-300 hover:text-white ${gitHover ? "text-[16px] ml-2 my:text-[0px]" : "text-[0px]"
                            }`}
                    >
                        Github
                    </div>
                </a>
            </div>
            <a
                onMouseEnter={() => setDiscordHover(true)}
                onMouseLeave={() => setDiscordHover(false)}
                className="w-[100%] flex gap-2 items-center justify-end transition-all h-[40px] duration-300"
                href="https://discord.com/users/955095844275781693"
            >
                <img
                    className="h-[30px]"
                    src={discordIcon}
                    alt="Discord Icon"
                />
                <div
                    className={`transition-all duration-300 text-center  text-neutral-300 hover:text-white ${discordHover ? "text-[16px] ml-1 my:text-[0px]" : "text-[0px]"
                        }`}
                >
                    Discord
                </div>
            </a>
            <a
                onMouseEnter={() => setInstaHover(true)}
                onMouseLeave={() => setInstaHover(false)}
                className="w-[100%] flex gap-2 items-center justify-end transition-all h-[40px] duration-300"
                href="https://www.instagram.com/caiuwu_/"
            >
                <img
                    className="h-[30px]"
                    src={instagramIcon}
                    alt="Instagram Icon"
                />
                <div
                    className={`transition-all duration-300 text-center  text-neutral-300 hover:text-white ${instaHover ? "text-[16px] my:text-[0px]" : "text-[0px]"
                        }`}
                >
                    Instagram
                </div>
            </a>
            <a
                onMouseEnter={() => setWhatsHover(true)}
                onMouseLeave={() => setWhatsHover(false)}
                className="w-[100%] flex gap-2 items-center justify-end transition-all h-[40px] duration-300"
                href="/"
            >
                <img
                    className="h-[30px]"
                    src={whatsappIcon}
                    alt="Whatsapp Icon"
                />
                <div
                    className={`transition-all duration-300 text-end  text-neutral-300 hover:text-white ${whatsHover ? "text-[16px] my:text-[0px]" : "text-[0px]"
                        }`}
                >
                    Whatsapp
                </div>
            </a>
        </div>
    );
};
