import './App.css'

import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {DetailHero} from "./pages/DetailHero/DetailHero.tsx";
import {FavoriteHeroes} from "./pages/FavoriteHeroes/FavoriteHeroes.tsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/hero/:heroID" element={<DetailHero/>}/>
            <Route path="/heroes/favorite/" element={<FavoriteHeroes/>}/>
        </Routes>

    )
}

export default App
