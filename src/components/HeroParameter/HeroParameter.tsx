import styles from './HeroParameter.module.scss';
import type {HeroDetail} from "../../types/hero.ts";

interface HeroParameterProps {
    hero: HeroDetail
}

export const HeroParameter = (props: HeroParameterProps) => {
    const {hero} = props;

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.title}>Атака</h2>
                <ul className={styles.parametersList}>

                    <li className={styles.parameter}>
                        <img className={styles.parameterIcon} src="/icons/stats/icon_damage.png" alt="Урон"/>
                        <div>{hero.damage_min}-{hero.damage_max}</div>
                    </li>
                    <li className={styles.parameter}>
                        <img className={styles.parameterIcon} src="/icons/stats/icon_attack_time.png"
                             alt="Скорость атаки"/>
                        <div>{hero.attack_rate}</div>
                    </li>

                    <li className={styles.parameter}>
                        <img className={styles.parameterIcon} src="/icons/stats/icon_attack_range.png"
                             alt="Дальность атаки"/>
                        <div>{hero.attack_range}</div>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className={styles.title}>Защита</h2>
                <ul className={styles.parametersList}>

                    <li className={styles.parameter}>
                        <img className={styles.parameterIcon} src="/icons/stats/icon_armor.png" alt="Защита"/>
                        <div>{hero.armor.toFixed(1)}</div>
                    </li>
                    <li className={styles.parameter}>
                        <img className={styles.parameterIcon} src="/icons/stats/icon_magic_resist.png"
                             alt="Сопротивление магии"/>
                        <div>{hero.magic_resistance}</div>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className={styles.title}>Мобильность</h2>
                <ul className={styles.parametersList}>

                    <li className={styles.parameter}>
                        <img className={styles.parameterIcon} src="/icons/stats/icon_movement_speed.png"
                             alt="Скорость передвижения"/>
                        <div>{hero.movement_speed}</div>
                    </li>
                    <li className={styles.parameter}>
                        <img className={styles.parameterIcon} src="/icons/stats/icon_turn_rate.png"
                             alt="Скорость разворота"/>
                        <div>{hero.turn_rate}</div>
                    </li>

                    <li className={styles.parameter}>
                        <img className={styles.parameterIcon} src="/icons/stats/icon_vision.png"
                             alt="Дальность обзора"/>
                        <div>{hero.sight_range_day}/{hero.sight_range_night}</div>
                    </li>
                </ul>
            </div>

        </div>
    );
};
