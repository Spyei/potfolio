import React, { useState } from "react";
import { InitInfos } from "./InitInfos";

export const Main: React.FC = () => {
    const [page, setPage] = useState<number>(1);

    switch (page) {
        case 1:
            return <InitInfos setPage={setPage} />;
        case 2: 
            return <div>oie</div>
    }
};
