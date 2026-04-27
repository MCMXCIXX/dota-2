
import styles from './HeroBio.module.scss';
import {DecorGoldenLine} from "../DecorGoldenLine/DecorGoldenLine.tsx";

interface HeroBioProps {
  bioText: string;
}

export const HeroBio = (props: HeroBioProps) => {

  const {bioText} = props;

    return (
        <div className={styles.heroBio}>
          <h2 className={styles.title}>История</h2>
            <DecorGoldenLine/>
            <p className={styles.bioText}>{bioText}</p>
        </div>
    );
};
