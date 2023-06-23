import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserRepos } from "../types";

export const Projects: React.FC<{
    setPage: (value: number) => void;
}> = ({ setPage }) => {
    const [repos, setRepos] = useState<UserRepos>();

    useEffect(() => {
        try {
            axios
                .get<UserRepos>("https://api.github.com/user/repos", {
                    headers: {
                        Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
                    },
                })
                .then((res: { data: UserRepos }) => {
                    setRepos(res.data);
                });
        } catch (error: unknown) {
            console.error(error);
        }
    }, []);

    return (
        <section className="bg-black w-[100vw] text-white h-[100vh]">
            <div className="flex items-center justify-center flex-col">
                <div className="flex flex-col items-center">
                    <h1 className="text-[43px] my-3">
                        Projetos em desenvolvimento
                    </h1>
                    <hr className="w-[90vw] mb-6" />
                </div>
                <button className="flex flex-col bg-neutral-900 transition-colors duration-300 hover:bg-neutral-800 rounded-lg border-2 border-white">
                    <div className="p-2 flex flex-col gap-1">
                        <h1 className="text-[19px] text-left">
                            Botlist-Website
                        </h1>
                        <div>
                            Um site feito para divulgar seu bot de discord de
                            uma maneira simples.
                        </div>
                    </div>
                    <div className="flex mx-3 mb-3 gap-[6px] bg-neutral-800 p-[6px] rounded-lg border-2">
                        <i className="devicon-tailwindcss-plain colored"></i>
                        <i className="devicon-typescript-plain colored"></i>
                        <i className="devicon-react-plain colored"></i>
                    </div>
                </button>
            </div>
            {repos ? <div>repos aqui</div> : <div>Loading...</div>}
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
