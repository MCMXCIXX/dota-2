import styles from './HeroAbility.module.scss';
import type {Ability} from "../../types/hero.ts";

interface HeroAbilityProps {
    ability: Ability;
}

export const HeroAbility = (props: HeroAbilityProps) => {
    const {ability} = props;

    const baseAbilityImageURL = 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/abilities/'

    return (
        <div className={styles.ability}>
            <img className={styles.abilityImage} src={`${baseAbilityImageURL}${ability.name}.png`} alt={ability.name_loc}/>
        </div>
    );
};
