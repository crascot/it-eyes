import React, { useEffect, useState } from 'react'
import { ReactComponent as Search } from '../../common/icons/search.svg'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ReactComponent as RuIcon } from '../../common/icons/ru.svg'
import { ReactComponent as KgIcon } from '../../common/icons/kg.svg'

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [, setSelectedLanguage] = useState(localStorage.getItem('i18nextLng') || i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem('i18nextLng');
        if (storedLanguage && storedLanguage !== i18n.language) {
            i18n.changeLanguage(storedLanguage);
            setSelectedLanguage(storedLanguage);
        }
    }, [i18n]);

    return (
        <div className={s.navbar}>
            <div className={s.search}>
                <input />
                <Search />
            </div>
            <div className={s.navLinks}>
                <p>{t('main.news')}</p>
                <Link to='/settings'>{t('main.settings')}</Link>
                <RuIcon onClick={() => changeLanguage('ru')} />
                <KgIcon onClick={() => changeLanguage('kg')} />
            </div>
        </div>
    )
}