import styles from './HeroAvatar.module.scss';
import {HeroInfoBar} from "../../pages/HeroInfoBar/HeroInfoBar.tsx";
import type {HeroDetail} from "../../types/hero.ts";


interface HeroAvatarProps extends HeroDetail {
    className?: string;
}

export const HeroAvatar = (props: HeroAvatarProps) => {
    const {primary_attr, complexity, name_loc, name, npe_desc_loc} = props;
    const baseAvatarURL = `https://cdn.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/`

    const nameRaw = name.toLowerCase().replace('npc_dota_hero_', '')
    const HeroMediaType = {
        ImagePNG: `${baseAvatarURL}${nameRaw}.png`,
        VideoWEBM: `${baseAvatarURL}${nameRaw}.webm`,
    } as const;

    return (
        <div className={styles.avatar}>
            <div className={`${styles.decor} ${styles.decorTop}`}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>
            <div className={`${styles.decor} ${styles.decorBottom}`}>
                <div className={styles.box}></div>
                <div className={styles.box}></div>
            </div>

            <div className={styles.heroInfo}>
                <HeroInfoBar descr={npe_desc_loc} name={name_loc} primary_attr={primary_attr} complexity={complexity} />
            </div>

            <div className={styles.imageWrapper}>
                <video
                    muted={true}
                    poster={HeroMediaType["ImagePNG"]}
                    autoPlay={true}
                    loop
                    className={styles.image}>
                    <source type="video/webm" src={HeroMediaType["VideoWEBM"]}/>
                    <img src={HeroMediaType["ImagePNG"]} alt={name_loc}/>
                </video>
            </div>
        </div>
    );
};
