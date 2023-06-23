import React from "react";
import xIcon from "../assets/svg/x.svg";

export const ProjectChoice: React.FC<{
    setPanel: (value: boolean) => void;
}> = ({ setPanel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[6px] transition-all duration-300 ">
            <div className="bg-neutral-800 w-[30vw] h-[200px] rounded-lg shadow-md shadow-neutral-800">
                <div className="bg-neutral-700 w-full h-[30px] rounded-t-lg items-center justify-end flex flex-row-reverse">
                    <button
                        onClick={() => {
                            setPanel(false);
                        }}
                        className="mr-1"
                    >
                        <img
                            className="w-[30px]"
                            src={xIcon}
                            alt="Exit Button"
                        />
                    </button>
                    <span className="w-[30vw] text-center">Botlist-Website</span>
                </div>
                <div className="flex flex-col items-center h-[160px] justify-center gap-3">
                    <button className="border-2 p-2 rounded-lg w-[200px] transition-colors duration-300 hover:bg-neutral-900">Repositório</button>
                    <button className="border-2 p-2 rounded-lg w-[200px] transition-colors duration-300 hover:bg-neutral-900">Preview</button>
                </div>
            </div>
        </div>
    );
};
