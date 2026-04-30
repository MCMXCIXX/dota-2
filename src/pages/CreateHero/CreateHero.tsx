import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../../services/store/store';
import {HERO_ATTR, HERO_COMPLEXITY, type HeroComplexity, type HeroPrimaryAttr} from '../../types/hero';
import styles from './CreateHero.module.scss';
import {createHero} from "../../services/redusers/heroReducer.ts";
import {buildFullHero} from "../../services/utils.ts";

export const CreateHero = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [nameLoc, setNameLoc] = useState('');
    const [primaryAttr, setPrimaryAttr] = useState<HeroPrimaryAttr>(HERO_ATTR.Strength);
    const [complexity, setComplexity] = useState<HeroComplexity>(HERO_COMPLEXITY.Normal);
    const [bio, setBio] = useState('');

    const newHero = buildFullHero({ name_loc: nameLoc, primary_attr: primaryAttr, complexity, bio_loc: bio }, Date.now())

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
            dispatch(createHero(newHero));
        navigate('/heroes');
    };

    return (
        <div className="container">
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Создание героя</h2>

                <label className={styles.field}>
                    <span>Системное имя (npc_dota_hero_...)</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label className={styles.field}>
                    <span>Имя героя</span>
                    <input
                        type="text"
                        value={nameLoc}
                        onChange={(e) => setNameLoc(e.target.value)}
                        required
                    />
                </label>

                <label className={styles.field}>
                    <span>Основной атрибут</span>
                    <select
                        value={primaryAttr}
                        onChange={(e) => setPrimaryAttr(Number(e.target.value) as HeroPrimaryAttr)}
                    >
                        <option value={HERO_ATTR.Strength}>Сила</option>
                        <option value={HERO_ATTR.Agility}>Ловкость</option>
                        <option value={HERO_ATTR.Intelligence}>Интеллект</option>
                        <option value={HERO_ATTR.Universal}>Универсальный</option>
                    </select>
                </label>

                <label className={styles.field}>
                    <span>Сложность</span>
                    <select
                        value={complexity}
                        onChange={(e) => setComplexity(Number(e.target.value) as HeroComplexity)}
                    >
                        <option value={HERO_COMPLEXITY.Normal}>Лёгкий</option>
                        <option value={HERO_COMPLEXITY.Medium}>Средний</option>
                        <option value={HERO_COMPLEXITY.Hard}>Сложный</option>
                    </select>
                </label>

                <label className={styles.field}>
                    <span>Биография</span>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={6}
                    />
                </label>

                <div className={styles.actions}>
                    <button type="button" onClick={() => navigate('/heroes')}>
                        Отмена
                    </button>
                    <button type="submit">Создать</button>
                </div>
            </form>
        </div>
    );
};
