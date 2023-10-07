import { FC, useState, useEffect } from "react";
import LinkIcons from "../Links/LinkIcons";
import Projects from "../Projects/Projects";
import * as icon from "react-icons/bi";
import { HiChevronDoubleDown } from "react-icons/hi";

const InitInfos: FC = () => {
    const [idade, setIdade] = useState<number>(0);

    useEffect(() => {
        const dataNascimento: Date = new Date(2007, 8, 8);
        const dataAtual: Date = new Date();
        const diffAnos: number = dataAtual.getFullYear() - dataNascimento.getFullYear();

        if (dataAtual.getMonth() < dataNascimento.getMonth() || (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
            setIdade(diffAnos - 1);
        } else {
            setIdade(diffAnos);
        }
    }, []);

    return (
        <main>
            <section className="h-[100vh] bg-[#000] w-full flex-col flex items-center justify-center">
                <div className="transition-all duration-500 flex justify-center items-center my:flex-col">
                    <div className="w-[120px]">
                        <LinkIcons />
                    </div>
                    <div className="flex flex-col gap-10 items-center">
                        <div>
                            <div className="text-neutral-400 flex my:justify-center m-1 w-full my:items-start">
                                <span>Olá 👋 me chamo Caio.</span>
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
                                    Atualmente tenho {idade} anos, com 1 ano de
                                    experiência desenvolvendo meus projetos
                                    pessoais.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex my:gap-4 text-white flex-col my:flex-row my:items-center my:justify-center ml-2 my:ml-0 my:mt-6">
                        <icon.BiLogoJavascript fill="#FFDF00" size={35} />
                        <icon.BiLogoTypescript fill="#0379CC" size={35} />
                        <icon.BiLogoReact fill="#00D8FE" size={35} />
                        <icon.BiLogoTailwindCss fill="#38BDF8" size={35} />
                    </div>
                </div>
                <div className="bottom-4 absolute flex flex-col">
                    <HiChevronDoubleDown fill="#ffffff" className="animate-bounce" size={40} />
                </div>
            </section>
            <div className="w-[100vw] h-[40px] bg-black flex flex-row">
                <div
                    className="bg-center bg-repeat bg-cover"
                    style={{
                        backgroundImage: "url(https://cdn.discordapp.com/attachments/988397828063772762/1131594877063409735/image.png)",
                        width: "100vw",
                        height: "50px"
                    }}
                ></div>
            </div>
            <Projects />
        </main>
    );
};

export default InitInfos;