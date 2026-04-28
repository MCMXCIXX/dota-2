import styles from './HeroStats.module.scss';
import {HeroAvatarMini} from "../HeroAvatarMini/HeroAvatarMini.tsx";
import type {HeroDetail} from "../../types/hero.ts";
import {HeroMainAttr} from "../HeroMainAttr/HeroMainAttr.tsx";
import {HeroParameter} from "../HeroParameter/HeroParameter.tsx";

interface HeroStatsProps {
    hero: HeroDetail,
    className?: string,
}

export const HeroStats = (props: HeroStatsProps) => {

    const {hero} = props;

    return (
        <div className={`${styles.heroStatsContainer} container`}>
            <div className={styles.heroStatsCol}>
                <HeroAvatarMini hero={hero}/>
                <HeroMainAttr hero={hero}/>
            </div>
            <div className={styles.heroStatsCol}>
                <HeroParameter hero={hero}/>
            </div>
        </div>
    );
};
