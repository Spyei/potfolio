import React from "react";

export const Projects: React.FC<{
    setPage: (value: number) => void;
}> = ({ setPage }) => {
    return (
        <section className="bg-black w-[100vw] text-white h-[100vh]">
            <button
                onClick={() => {
                    setPage(1);
                }}
            >
                Voltar
            </button>
        </section>
    );
};
