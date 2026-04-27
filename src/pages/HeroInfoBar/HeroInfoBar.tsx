import styles from './HeroInfoBar.module.scss';
import {ATTR_COLORS, ATTR_ICON, ATTR_NAMES, type HeroComplexity, type HeroPrimaryAttr} from "../../types/hero.ts";
import {ComplexityDiamonds} from "../../components/ComplexityDiamonds/ComplexityDiamonds.tsx";
import {HeroName} from "../../components/HeroName/HeroName.tsx";

interface HeroInfoBarProps {
    name: string;
    descr: string;
    primary_attr: HeroPrimaryAttr;
    complexity: HeroComplexity;
}

export const HeroInfoBar = (props: HeroInfoBarProps) => {
    const {primary_attr,complexity, name, descr} = props;

    return (
        <div className={styles.heroInfoBar}>
            <HeroName className={'heading-big'}>{name}</HeroName>
            <p className={styles.desc}>{descr}</p>

            <div className={styles.heroAttrs}>

                <div className={styles.primeryAttr} style={
                    {
                        color: ATTR_COLORS[primary_attr],
                        backgroundColor: ATTR_COLORS[primary_attr] + '4D',
                        borderColor: ATTR_COLORS[primary_attr],
                    }
                }>
                    <img className={styles.attrIcon} src={ATTR_ICON[primary_attr]}
                         alt={ATTR_NAMES[primary_attr]}/> <span
                    >{ATTR_NAMES[primary_attr]}</span>
                </div>

                <div className={styles.heroCompacity}>
                    <ComplexityDiamonds complexity={complexity} />
                </div>

            </div>
        </div>
    );
};
