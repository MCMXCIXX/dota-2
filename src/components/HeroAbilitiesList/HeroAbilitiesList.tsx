import styles from './HeroAbilitiesList.module.scss';
import type {Ability} from "../../types/hero.ts";
import {HeroAbility} from "../HeroAbility/HeroAbility.tsx";

interface HeroAbilitiesListProps {
    heroAbilities: Ability[];
}

export const HeroAbilitiesList = (props: HeroAbilitiesListProps) => {
    const {heroAbilities} = props;
    return (
        <>

            <div className={styles.container}>
                <h2 className={styles.title}>Способности</h2>

                <div className={styles.abilityList}>

                    {heroAbilities.map((ability: Ability) => {
                        if (ability.ability_is_innate === false) {
                            return <HeroAbility ability={ability}/>
                        }
                    })}
                </div>
            </div>
        </>
    );
};
