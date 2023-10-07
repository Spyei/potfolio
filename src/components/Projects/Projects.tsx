import { FC } from "react";
import Project from "./Project";
import * as icon from "react-icons/bi";

const Projects: FC = () => {
    return (
        <section className="bg-white h-[100vh] w-[100vw]">
            <div className="w-[100vw] h-full flex items-center flex-col justify-center gap-[100px]">
                <div className="w-full flex justify-center text-6xl font-extrabold">
                    <h1>Meus projetos</h1>
                </div>
                <Project name="Simo Botlist" description="Um site feito para ajudar a divulgação do seu bot de discord." project="https://simo-botlist.vercel.app" repo="https://github.com/Simo-Workspace/Botlist-Website" img="https://cdn.discordapp.com/attachments/955900016436838440/1160277222620405870/image.png?ex=6534135e&is=65219e5e&hm=6ee8a179bac146ad3891fd5f2c2b66882711f4e1964dffd99a75b3b3f2b5a3b8&"
                    stacks={[
                        <icon.BiLogoTypescript fill="#0379CC" size={35} />,
                        <icon.BiLogoReact fill="#00D8FE" size={35} />,
                        <icon.BiLogoTailwindCss fill="#38BDF8" size={35} />
                    ]}
                />
            </div>
        </section>
    )
};

export default Projects;