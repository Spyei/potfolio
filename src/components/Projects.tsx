import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserRepos } from "../types";

export const Projects: React.FC<{
    setPage: (value: number) => void;
}> = ({ setPage }) => {
    const [repos, setRepos] = useState<UserRepos>();

    useEffect(() => {
        try {
            axios.get<UserRepos>("https://api.github.com/user/repos", {
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
    console.log(repos);

    return (
        <main className="bg-black w-[100vw] text-white h-[100vh]">
            <section>
                <button
                    onClick={() => {
                        setPage(1);
                    }}
                >
                    Voltar
                </button>
                <div></div>
                {repos ? (
                    <div>repos aqui</div>
                ) : (
                    <div>Loading...</div>
                )}
            </section>
        </main>
    );
};
