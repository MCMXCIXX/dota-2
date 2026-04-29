import './App.css'

import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {DetailHero} from "./pages/DetailHero/DetailHero.tsx";
import {FavoriteHeroes} from "./pages/FavoriteHeroes/FavoriteHeroes.tsx";
import {Header} from "./components/Header/Header.tsx";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/heroes" replace/>}/>
                <Route path="/heroes/" element={<MainPage/>}/>
                <Route path="/hero/:heroID" element={<DetailHero/>}/>
                <Route path="/heroes/favorite/" element={<FavoriteHeroes/>}/>
            </Routes>
        </>

    )
}

export default App
