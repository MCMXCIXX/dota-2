
import styles from './Button.module.scss';

interface ButtonProps {
    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const {children} = props;

    return (
        <button className={styles.button}>
            {children}
        </button>
    );
};
