
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <header className={`${styles.header} container`}>
            <NavLink className={({isActive}) => `${'button'} ${isActive ? 'buttonActive' : ''}`} to="/heroes/" end>Все персонажи</NavLink>
            <NavLink className={({isActive}) => `${'button'} ${isActive ? 'buttonActive' : ''}`} to="/heroes/favorite/">Избранное</NavLink>
        </header>
    );
};
