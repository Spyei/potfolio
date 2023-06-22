import React, { useState } from "react";
import { LinkIcons } from "./LinkIcons";

export const InitInfos: React.FC<{
    setPage: (value: number) => void;
}> = ({ setPage }) => {
    const [arrowState, setArrowState] = useState<boolean>(false);
    const [click, setClick] = useState<boolean>(false);

    return (
        <main className="h-[100vh] bg-[#000] w-full flex-row my:flex-col-reverse flex items-center justify-center">
            <section
                className={`transition-all duration-500 flex justify-center items-center my:flex-col-reverse ${
                    click && "opacity-0 invisible"
                }`}
            >
                <LinkIcons />
                <div className="flex flex-col gap-10 items-center justify-items-center">
                    <div>
                        <div className="text-neutral-400 items-end flex my:justify-center m-1 w-[100%]">
                            <div>Oie 👋 eu sou o Caio.</div>
                        </div>
                        <div className="inter my:w-[80vw] items-start justify-center flex flex-col text-white">
                            <h1 className="flex my:h-[50px] h-[90px] items-center my:text-[50px] text-[100px] font-sans font-extrabold">
                                FRONT-END
                            </h1>
                            <h1 className="flex my:h-[50px] h-[90px] items-center my:text-[50px] text-[100px] font-sans font-extrabold">
                                DEVELOPER
                            </h1>
                        </div>
                        <div className="text-neutral-400 w-full flex items-end text-[16px] m-1 justify-end">
                            <div className="w-[400px] my:w-[80vw]">
                                Atualmente tenho 15 anos, com 6 meses de
                                experiência desenvolvendo meus projetos
                                pessoais.
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            onMouseEnter={() => {
                                setArrowState(true);
                            }}
                            onMouseLeave={() => {
                                setArrowState(false);
                            }}
                            onClick={() => {
                                setTimeout(() => {
                                    setPage(2);
                                }, 300);
                                setClick(true);
                            }}
                            className="flex items-center gap-3 justify-center border-blue-700 hover:bg-blue-700 transition-all duration-300 border-2 rounded-lg text-white w-[200px] h-[50px]"
                        >
                            <span>Meus Projetos</span>
                            {arrowState ? (
                                <div>
                                    <div className="w-[11px] transition-all duration-300 bg-white h-[2px] rounded-full rotate-[35deg] ml-[10px]"></div>
                                    <div className="w-[11px] transition-all duration-300 bg-white h-[2px] rounded-full mt-1 -rotate-[35deg] ml-[10px]"></div>
                                </div>
                            ) : (
                                <div>
                                    <div className="w-[11px] transition-all duration-300 bg-white h-[2px] rounded-full rotate-[35deg]"></div>
                                    <div className="w-[11px] transition-all duration-300 bg-white h-[2px] rounded-full mt-1 -rotate-[35deg]"></div>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};
