import githubIcon from "../assets/svg/github.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import whatsappIcon from "../assets/svg/whatsapp.svg";

export const Main = () => {
    return (
        <section className="h-[100vh] bg-[#000] from-[1%] w-full flex-row my:flex-col-reverse flex items-center justify-center">
            <div className="flex flex-col my:flex-row my:items-center my:justify-center gap-3 mr-4 my:h-[100px] h-[180px]">
                <a href="https://github.com/spyei">
                    <img className="h-[30px]" src={githubIcon} alt="Github Icon" />
                </a>
                <a href="/">
                    <img className="h-[30px]" src={linkedinIcon} alt="Linkedin Icon" />
                </a>
                <a href="https://www.instagram.com/caiuwu_/">
                    <img className="h-[30px]" src={instagramIcon} alt="Instagram Icon" />
                </a>
                <a href="/">
                    <img className="h-[30px]" src={whatsappIcon} alt="Whatsapp Icon" />
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
