# Dota 2 Heroes — SPA

Одностраничное приложение со списком героев Dota 2, детальной информацией, избранным и возможностью создавать собственных героев.

**Демо:** https://MCMXCIXX.github.io/dota-2

## Стек

- **React 19** + **TypeScript**
- **Redux Toolkit** + **react-redux** — управление состоянием
- **React Router 7** (HashRouter) — маршрутизация
- **Vite** — сборка
- **SCSS Modules** — стили с изоляцией
- **gh-pages** — деплой

## Функциональность

### Список героев (`/heroes`)
- Загрузка списка с публичного API Dota 2
- Карточка с фото, именем, основным атрибутом и сложностью
- Кнопка лайка (добавить/убрать из избранного)
- Переход на детальную страницу по клику на карточку

### Избранное (`/heroes/favorite`)
- Отдельная страница со списком избранных героев
- Сохраняется в `localStorage` между сессиями

### Детальная страница (`/hero/:id`)
- Подробная информация о герое: биография, способности, характеристики
- Атрибуты, параметры атаки/защиты/мобильности
- Видео-аватар героя

### Создание героя (`/create`)
- Форма с полями (имя, основной атрибут, сложность, биография)
- Сохранение в общий store
- Созданные герои появляются в общем списке

### Поиск
- Поле поиска в шапке
- Фильтрация в реальном времени (без кнопки "Найти")
- Реализован через `debounce` для оптимизации

## Структура проекта

```
src/
├── components/        # Переиспользуемые компоненты
│   ├── Header/
│   ├── HeroCard/
│   ├── HeroAvatar/
│   ├── HeroBio/
│   └── ...
├── pages/             # Страницы маршрутов
│   ├── MainPage/
│   ├── DetailHero/
│   ├── FavoriteHeroes/
│   └── CreateHero/
├── services/
│   ├── api.ts                # Запросы к API через CORS-прокси
│   ├── store/                # Redux store
│   ├── redusers/             # Slice'ы (heroReducer)
│   ├── thunks/               # Асинхронная логика
│   └── utils.ts              # Утилиты (debounce и т.д.)
└── types/             # TypeScript-типы (HeroShort, HeroDetail)
```

## Хранение данных

- **Состояние** — в Redux store (`heroReducerSlice`)
- **Избранное** — продублировано в `localStorage` (восстанавливается при перезагрузке)
- **Кастомные герои** — также сохраняются в `localStorage`

## API

Используется публичное API Dota 2:
- Список героев: `https://www.dota2.com/datafeed/herolist?language=russian`
- Детали героя: `https://www.dota2.com/datafeed/herodata?language=russian&hero_id={id}`

Поскольку API не отдаёт CORS-заголовки, в продакшене запросы проксируются через [corsproxy.io](https://corsproxy.io/). В dev-режиме используется встроенный прокси Vite.

## Локальный запуск

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Сборка для продакшена
npm run build

# Деплой на GitHub Pages
npm run deploy
```

## Деплой

Проект автоматически разворачивается на GitHub Pages в ветку `gh-pages` командой `npm run deploy`.

Используется `HashRouter` (URL вида `/#/heroes`), потому что GitHub Pages не поддерживает SPA-роутинг с `history API` без дополнительных хаков.

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка проекта |
| `npm run preview` | Предпросмотр продакшен-сборки |
| `npm run lint` | Запуск ESLint |
| `npm run deploy` | Деплой на GitHub Pages |
