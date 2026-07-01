import { BrowserRouter,Routes,Route } from "react-router-dom";

import  {Dashboard}  from "./pages/Dashboard"
import { Games } from "./pages/Games";

import './App.css'

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/games"
                    element={<Games />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;