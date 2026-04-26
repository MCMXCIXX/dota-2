import styles from './DetailHero.module.scss';
import {HeroAvatar} from "../../components/HeroAvatar/HeroAvatar.tsx";
import {useParams} from "react-router-dom";


export const DetailHero = () => {
    const {heroID} = useParams();


    return (
        <div className={styles['details-hero']}>
            <HeroAvatar ={'mirana'} />
        </div>
    );
};
