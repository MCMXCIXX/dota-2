import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {debounce} from "../../services/utils.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../services/store/store.ts";
import {updateSearchInput} from "../../services/redusers/heroReducer.ts";


export const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const searchStoreValue = useSelector((state: RootState) => state.heroReducerSlice.searchInput);
    // const [SearchValue, setSearchValue] = useState<string>(searchStoreValue);

    const debouncedDispatch = debounce((value: string) => {
        dispatch(updateSearchInput(value));
    }, 150)
    return (
        <header className={`${styles.header} container`}>
            <nav className={styles.navigation}>
                <NavLink className={({isActive}) => `${'button'} ${isActive ? 'buttonActive' : ''}`} to="/heroes/" end>Все
                    персонажи</NavLink>
                <NavLink className={({isActive}) => `${'button'} ${isActive ? 'buttonActive' : ''}`}
                         to="/heroes/favorite/">Избранное</NavLink>
                <NavLink className={({isActive}) => `${'button'} ${isActive ? 'buttonActive' : ''}`}
                         to="/create/">Создать героя</NavLink>
            </nav>

            <input onChange={(e) => {
                debouncedDispatch(e.target.value)
            } } className={styles.search} placeholder={'Поиск героя...'} value={searchStoreValue} type="text"/>
        </header>
    );
};
