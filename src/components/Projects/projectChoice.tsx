import { FC } from "react";
import * as icon from "react-icons/bs";

export const ProjectChoice: FC<{
    setPanel: (value: boolean) => void;
    name: string;
    repo: string;
    project?: string;
}> = ({ setPanel, name, repo, project }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[6px] transition-all duration-300 text-white bg-black bg-opacity-50">
            <div className="bg-neutral-800 w-[500px] my:w-[300px] h-[200px] rounded-lg shadow-md shadow-neutral-800">
                <div className="bg-neutral-700 w-full h-[30px] rounded-t-lg items-center justify-end flex flex-row-reverse">
                    <button onClick={() => setPanel(false)} className="mr-1">
                        <icon.BsX size={30} className="transition-colors duration-300 hover:fill-red-500" />
                    </button>
                    <span className="flex-grow flex text-center ml-[30px]"><strong>{name}</strong></span>
                </div>
                <div className="flex flex-col items-center h-[160px] justify-center gap-3 w-[100%]">
                    <a href={repo} target="_blank" className="flex items-center justify-center gap-3 text-center border-2 p-2 rounded-lg border-neutral-600 w-[200px] transition-colors duration-300 hover:bg-neutral-600">
                        <icon.BsGithub size={20}/>
                        <span>Repositório</span>
                    </a>
                    {project && (
                        <a href={project} target="_blank" className="flex items-center justify-center gap-3 text-center border-2 border-neutral-600 p-2 rounded-lg w-[200px] transition-colors duration-300 hover:bg-neutral-600">
                            <icon.BsLink size={20}/>
                            <span>Website</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};