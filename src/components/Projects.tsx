import { FC } from "react";
import { Project } from "./Project";

export const Projectsoi: FC = () => {
    return (
        <section className="bg-white h-[100vh] w-[100vw]">
            <div className="w-full h-full flex-row grid grid-cols-2 my:grid-cols-1 place-items-center items-center">
                <Project name="Botlist Website" project="https://simo-botlist.vercel.app" repo="https://github.com/Simo-Workspace/Botlist-Website" img="https://cdn.discordapp.com/attachments/1125236198810599534/1131609026480844921/image.png"/>
                <Project name="TScord docs" project="https://tscord.vercel.app" repo="https://github.com/ts-cord/tscord-docs" img="https://cdn.discordapp.com/attachments/1125236198810599534/1131609026480844921/image.png"/>
            </div>
        </section>
    )
};