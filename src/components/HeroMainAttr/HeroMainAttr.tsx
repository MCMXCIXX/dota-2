import styles from './HeroMainAttr.module.scss';
import type {HeroDetail} from "../../types/hero.ts";

interface Props {
    hero: HeroDetail,
}

export const HeroMainAttr = (props: Props) => {

    const {hero} = props;
    return (
        <div className={styles.container}>
            <ul className={styles.attrList}>
                <li className={styles.attrItem}>
                    <img className={styles.attrIcon} src="/icons/attributes/hero_strength.png" alt="Сила"/>
                    <p className={styles.attrValue}>{hero.str_base}</p>
                    <p className={styles.attrPerLevel}>+{hero.str_gain}</p>
                </li>

                <li className={styles.attrItem}>
                    <img className={styles.attrIcon} src="/icons/attributes/hero_agility.png" alt="Сила"/>
                    <p className={styles.attrValue}>{hero.agi_base}</p>
                    <p className={styles.attrPerLevel}>+{hero.agi_gain}</p>
                </li>


                <li className={styles.attrItem}>
                    <img className={styles.attrIcon} src="/icons/attributes/hero_intelligence.png" alt="Сила"/>
                    <p className={styles.attrValue}>{hero.int_base}</p>
                    <p className={styles.attrPerLevel}>+{hero.int_gain}</p>
                </li>
            </ul>
        </div>
    );
};
