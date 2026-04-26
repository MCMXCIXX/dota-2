import styles from './HeroInfoBar.module.scss';
import {ATTR_COLORS, ATTR_ICON, ATTR_NAMES, type HeroComplexity, type HeroPrimaryAttr} from "../../types/hero.ts";
import {ComplexityDiamonds} from "../../components/ComplexityDiamonds/ComplexityDiamonds.tsx";

interface HeroInfoBarProps {
    primary_attr: HeroPrimaryAttr;
    complexity: HeroComplexity;
}

export const HeroInfoBar = (props: HeroInfoBarProps) => {
    const {primary_attr,complexity} = props;

    return (
        <div className={styles.heroInfoBar}>
            <h2 className={styles.name}></h2>
            <p className="desc"></p>

            <div className="heroAttrs">

                <div className={styles.primeryAttr}>
                    <img className={styles['attrIcon']} src={ATTR_ICON[primary_attr]}
                         alt={ATTR_NAMES[primary_attr]}/> <span
                    style={{color: ATTR_COLORS[primary_attr]}}>{ATTR_NAMES[primary_attr]}</span>
                </div>

                <div className={styles.heroCompacity}>
                    <ComplexityDiamonds complexity={complexity} />
                </div>

            </div>
        </div>
    );
};
