import { BrowserRouter,Routes,Route } from "react-router-dom";

import  {Dashboard}  from "./pages/Dashboard"
import { Games } from "./pages/Games/Games";

import './App.css'
import { Tasks } from "./pages/Tasks/Tasks";
import { WorldForgeRoutes } from "./routes/routes";
import { Assets } from "./pages/Assets/Assets";
import { Notes } from "./pages/Notes/Notes";
import { PromptLibrary } from "./pages/PromptLibrary/PromptLibrary";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path={`${WorldForgeRoutes.DASHBOARD}`}
                    element={<Dashboard />}
                />

                <Route
                    path={`${WorldForgeRoutes.GAMES}`}
                    element={<Games />}
                />

                 <Route
                    path={`${WorldForgeRoutes.TASKS}`}
                    element={<Tasks />}
                />

                <Route
                    path={`${WorldForgeRoutes.ASSETS}`}
                    element={<Assets />}
                />

                <Route
                    path={`${WorldForgeRoutes.NOTES}`}
                    element={<Notes />}
                />
                 <Route
                    path={`${WorldForgeRoutes.PROMPT_LIBRARY}`}
                    element={<PromptLibrary />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;