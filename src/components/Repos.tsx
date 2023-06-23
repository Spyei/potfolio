import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserRepos } from "../types";

export const Repos: React.FC = () => {
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

    return <div>{repos ? <div>repos aqui</div> : <div>Loading...</div>}</div>;
};
