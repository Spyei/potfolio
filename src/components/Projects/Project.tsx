import { FC, ReactNode, useState } from "react";
import { ProjectChoice } from "./projectChoice";

const Project: FC<{
    name: string;
    repo: string;
    project: string;
    img: string;
    description: string;
    stacks: ReactNode[]
}> = ({ name, repo, project, img, stacks, description }) => {
    const [panel, setPanel] = useState<boolean>();

    return (
        <>
            <button onClick={() => setPanel(true)} className="bg-black w-[500px] my:w-[90vw] rounded-lg p-2 gap-3 transition-all hover:scale-110 hover:bg-neutral-800">
                <div className="border-2 border-gray-300 rounded-lg">
                    <img src={img} className="h-[70%] bg-neutral-800 object-fill rounded-t-lg" />
                </div>
                <h1 className="text-center text-white text-[23px]"><strong>{name}</strong></h1>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <div className="text-white">
                        <span>{description}</span>
                    </div>
                    <div className="w-full flex items-center text-center flex-col gap-3">
                        <div className="flex flex-row">
                            {...stacks}
                        </div>
                    </div>
                </div>
            </button>
            <section className={`transiton-opacity duration-300 ${panel ? "visible opacity-100" : "invisible opacity-0"}`}>
                <ProjectChoice setPanel={setPanel} name={name} repo={repo} project={project} />
            </section>
        </>
    )
}

export default Project;