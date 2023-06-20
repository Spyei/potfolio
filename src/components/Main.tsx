import githubIcon from "../assets/svg/github.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import whatsappIcon from "../assets/svg/whatsapp.svg";
import React, { useState } from "react";

export const Main: React.FC = () => {
    const [isHovering, setHover] = useState<boolean>(true);

    return (
        <section className="h-[100vh] bg-[#000] from-[1%] w-full flex-row my:flex-col-reverse flex items-center justify-center">
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
                    <img
                        className="h-[30px]"
                        src={githubIcon}
                        alt="Github Icon"
                    />
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
                    href=""
                >
                    <img
                        className="h-[30px]"
                        src={linkedinIcon}
                        alt="Linkedin Icon"
                    />
                    <div
                        className={`transition-all duration-300 text-center  text-neutral-300 hover:text-white ${
                            isHovering ? "text-[16px] ml-1" : "text-[0px]"
                        }`}
                    >
                        Linkedin
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
            <div>
                <div className="text-neutral-400 items-end flex my:justify-center m-1 w-[100%]">
                    <div>Oie 👋 eu sou o Caio.</div>
                </div>
                <div className="inter my:w-[80vw] items-center justify-center flex flex-col text-white">
                    <h1 className="flex my:h-[50px] h-[90px] items-center my:text-[50px] text-[100px] font-sans font-extrabold">
                        FRONT-END
                    </h1>
                    <h1 className="flex my:h-[50px] h-[90px] items-center my:text-[50px] text-[100px] font-sans font-extrabold">
                        DEVELOPER
                    </h1>
                </div>
                <div className="text-neutral-400 w-full flex items-end text-[16px] m-1 justify-end">
                    <div className="w-[400px] my:w-[80vw]">
                        Atualmente tenho 15 anos, com 6 meses de experiência
                        desenvolvendo meus projetos pessoais.
                    </div>
                </div>
            </div>
        </section>
    );
};
