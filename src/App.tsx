import { useState } from "react";
import { InitInfos } from "./components/InitInfos";
import { Projects } from "./components/Projects";

function App () {
    const [page, setPage] = useState<number>(1);

    switch (page) {
        case 1:
            return <InitInfos setPage={setPage} />;
        case 2:
            return <Projects setPage={setPage} />;
    }
};

export default App;
