import { LinkIcons } from "./LinkIcons";
import React, { useState } from "react";

export const Main: React.FC = () => {
    const [arrowState, setArrowState] = useState<boolean>(false);

    return (
        <main className="h-[100vh] bg-[#000] w-full flex-row my:flex-col-reverse flex items-center justify-center">
            <LinkIcons />
            <div className="flex flex-col gap-10 items-center justify-items-center">
                <section>
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
                            Atualmente tenho 15 anos, com 6 meses de experiência
                            desenvolvendo meus projetos pessoais.
                        </div>
                    </div>
                </section>
                <div>
                    <button
                        onMouseEnter={() => {
                            setArrowState(true);
                        }}
                        onMouseLeave={() => {
                            setArrowState(false);
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
        </main>
    );
};
