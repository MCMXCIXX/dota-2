import styles from './HeroAvatarMini.module.scss';
import type {HeroDetail} from "../../types/hero.ts";
import {getClearName} from "../../services/utils.ts";
import {StatsBar} from "../StatsBar/StatsBar.tsx";

interface HeroAvatarMiniProps {
    hero: HeroDetail,
}

export const HeroAvatarMini = (props: HeroAvatarMiniProps) => {
    const {hero} = props;
    const baseImageURL = 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/'

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={`${baseImageURL}${getClearName(hero.name)}.png`} alt={hero.name_loc}/>
            <div className={styles.HPBar}>
                <StatsBar totalValue={hero.max_health} regenerateValue={hero.health_regen} />
            </div>
            <div className={styles.HPBar}>
                <StatsBar isMana totalValue={hero.max_mana} regenerateValue={hero.mana_regen} />
            </div>
        </div>
    );
};
