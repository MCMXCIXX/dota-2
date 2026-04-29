
import styles from './Header.module.scss';
import {Button} from "../Button/Button.tsx";


export const Header = () => {
    return (
        <header className={styles.header}>
            <Button>Все персонажи</Button>
            <Button>Избранное</Button>
        </header>
    );
};
