import React, { useContext } from 'react'
import s from './Settings.module.css'
import { ThemeContext } from '../../providers/Themeprovider'

const Settings = () => {
    const [, setTheme] = useContext(ThemeContext).color;
    const [, setTextSize] = useContext(ThemeContext).size;
    const [, setIsSerif] = useContext(ThemeContext).serif;
    const [, setLetterSpacing] = useContext(ThemeContext).spacing;

    const standart = () => {
        setTheme('');
        setTextSize('');
        setIsSerif('');
        setLetterSpacing('');
    }

    return (
        <div className={s.settings}>
            <button onClick={standart}>Стандартная версия сайта</button>
            <h5>Выберите шрифт:</h5>
            <span className={s.serif}>
                <button onClick={() => setIsSerif('serif')}>С ЗАСЕЧКАМИ</button>
                <button onClick={() => setIsSerif('')}>БЕЗ ЗАСЕЧЕК</button>
            </span>
            <h5>Интервал между буквами:</h5>
            <span className={s.spacing}>
                <button onClick={() => setLetterSpacing('')}>СТАНДАРТНЫЙ</button>
                <button onClick={() => setLetterSpacing('spacingMiddle')}>СРЕДНИЙ</button>
                <button onClick={() => setLetterSpacing('spacingBig')}>БОЛЬШОЙ</button>
            </span>
            <h5>Режим страницы:</h5>
            <span className={s.theme}>
                <button onClick={() => setTheme('')}>КОНТРАСТ</button>
                <button onClick={() => setTheme('invert')}>ИНВЕРТИРОВАННЫЙ</button>
                <button onClick={() => setTheme('comfort')}>КОМФОРТ</button>
                <button onClick={() => setTheme('brown')}>КОРИЧНЕВЫЙ</button>
                <button onClick={() => setTheme('blue')}>ГОЛУБОЙ</button>
            </span>
            <span className={s.fontSize}>
                <h5>Размер шрифта:</h5>
                <button onClick={() => setTextSize('little')}>A</button>
                <button onClick={() => setTextSize('')}>A</button>
                <button onClick={() => setTextSize('big')}>A</button>
            </span>
        </div>
    )
}

export default Settings