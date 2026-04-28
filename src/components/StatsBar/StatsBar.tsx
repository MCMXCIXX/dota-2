import styles from './StatsBar.module.scss';

interface Props {
    totalValue: number;
    regenerateValue: number;
    isMana?: boolean;
}

export const StatsBar = (props: Props) => {

    const {totalValue, regenerateValue, isMana} = props;

    return (
        <div className={`${styles.container} ${isMana ? styles.isMana : ''}`}>
            <p className={styles.totalHP}>{totalValue}</p>
            <p className={styles.regenerate}>{regenerateValue.toFixed(1)}</p>
        </div>
    );
};
