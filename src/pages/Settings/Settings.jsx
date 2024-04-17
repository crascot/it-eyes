import React, { useContext } from 'react'
import s from './Settings.module.css'
import { ThemeContext } from '../../providers/Themeprovider'
import { useTranslation } from 'react-i18next'

const Settings = () => {
    const { t } = useTranslation();

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
            <button onClick={standart}>{t('settings.standart')}</button>
            <h5>{t('settings.font')}</h5>
            <span className={s.serif}>
                <button onClick={() => setIsSerif('serif')}>С ЗАСЕЧКАМИ</button>
                <button onClick={() => setIsSerif('')}>БЕЗ ЗАСЕЧЕК</button>
            </span>
            <h5>Интервал между буквами:</h5>
            <span className={s.spacing}>
                <button onClick={() => setLetterSpacing('')}>СТАНДАРТ</button>
                <button onClick={() => setLetterSpacing('spacingMiddle')}>{t('settings.middle')}</button>
                <button onClick={() => setLetterSpacing('spacingBig')}>{t('settings.big')}</button>
            </span>
            <h5>{t('settings.design')}</h5>
            <span className={s.theme}>
                <button onClick={() => setTheme('')}>КОНТРАСТ</button>
                <button onClick={() => setTheme('invert')}>ИНВЕРТИРОВАННЫЙ</button>
                <button onClick={() => setTheme('comfort')}>КОМФОРТ</button>
                <button onClick={() => setTheme('brown')}>{t('settings.brown')}</button>
                <button onClick={() => setTheme('blue')}>{t('settings.blue')}</button>
            </span>
            <span className={s.fontSize}>
                <h5>{t('settings.fontSize')}</h5>
                <button onClick={() => setTextSize('little')}>A</button>
                <button onClick={() => setTextSize('')}>A</button>
                <button onClick={() => setTextSize('big')}>A</button>
            </span>
        </div>
    )
}

export default Settings