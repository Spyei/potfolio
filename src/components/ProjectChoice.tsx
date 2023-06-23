import React from "react";

export const ProjectChoice: React.FC<{
    setPanel: (value: boolean) => void;
}> = ({ setPanel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[6px] transition-all duration-300 ">
            <button onClick={() => {
                setPanel(false)
            }}>
                Voltar
            </button>
        </div>
    );
};
