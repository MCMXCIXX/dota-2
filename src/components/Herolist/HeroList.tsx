
import styles from './Herolist.module.scss';
import {HeroCard} from "../HeroCard/HeroCard.tsx";
import type {HeroShort} from "../../types/hero.ts";

interface HeroListProps {
    heroListData: HeroShort[]
}
export const HeroList = (props: HeroListProps) => {

    const {heroListData} = props;

    return (
        <div className={`${styles.heroList} container`}>
            {heroListData.map(({id, name_loc, primary_attr, name, complexity}) => (
                <HeroCard key={id} id={id} name={name} isFavorite={false} name_loc={name_loc} primary_attr={primary_attr} complexity={complexity} />
            ))}

        </div>
    );
};
