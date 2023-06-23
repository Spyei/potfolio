import React, { useEffect, useState } from "react";
import axios from "axios";

export const RepoLangs: React.FC<{
    repoName: string;
}> = ({ repoName }) => {
    const [languages, setLanguages] = useState<string[]>([]);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await axios.get(
                    `https://api.github.com/repos/${repoName}/languages`,
                    {
                        headers: {
                            Authorization:
                                "Bearer " + import.meta.env.VITE_API_KEY,
                        },
                    }
                );
                const data = response.data;
                const languages = Object.keys(data);
                setLanguages(languages);
            } catch (error) {
                console.error(error);
            }
        };
        fetchLanguages();
    }, [repoName]);

    return (
        <>
            {languages.map((language) => (
                    <i key={language} className={`devicon-${language?.replace('HTML', 'react').replace('CSS', 'tailwindcss').toLowerCase()}-plain colored`}></i>
                ))}
        </>
    );
};
