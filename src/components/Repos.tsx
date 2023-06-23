import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserRepos } from "../types";
import { RepoLangs } from "./RepoLangs";

export const Repos: React.FC<{
    setPanel: (value: boolean) => void;
}> = ({ setPanel }) => {
    const [repos, setRepos] = useState<UserRepos[]>([]);

    useEffect(() => {
        try {
            axios
                .get<UserRepos[]>("https://api.github.com/user/repos", {
                    headers: {
                        Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
                    },
                })
                .then((res) => {
                    setRepos(res.data);
                });
        } catch (error: unknown) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-[43px] my-3">Repositórios</h1>
                <hr className="w-[90vw] mb-6" />
            </div>
            <div className="flex items-center justify-center">
                {repos.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 my:grid-cols-1">
                        {repos.map((repo: UserRepos) => (
                            <div key={repo.id}>
                                <button
                                    onClick={() => {
                                        setPanel(true);
                                    }}
                                    className="flex flex-col my:w-[90vw] w-[43vw] h-[170px] bg-neutral-900 transition-colors duration-300 hover:bg-neutral-800 rounded-lg border-2 border-white"
                                >
                                    <div className="p-2 flex flex-col gap-1">
                                        <h1 className="text-[19px] text-left">
                                            {repo.name}
                                        </h1>
                                        <div className="break-words w-full text-left h-[72px]">
                                            {repo.description ||
                                                "Nenhuma descrição foi fornecida."}
                                        </div>
                                    </div>
                                    <div className="flex mx-3 mb-3 gap-[6px] bg-neutral-800 p-[6px] rounded-lg border-2">
                                        <RepoLangs repoName={repo.full_name} />
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
};
