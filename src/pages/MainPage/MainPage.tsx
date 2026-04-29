import {HeroList} from "../../components/Herolist/HeroList.tsx";
import {Header} from "../../components/Header/Header.tsx";


export const MainPage = () => {
    return (
        <div className={'container'}>
            <Header/>
            <HeroList/>
        </div>
    );
};
