import React from 'react'
import s from './lesson.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LessonThree = () => {
    const { t } = useTranslation();

    return (
        <div className={s.lesson}>
            <h3>{t('whyJava')}</h3>
            <div>
                <p>{t('javaNoobs')}</p>
                <p>{t('updated')}</p>
            </div>
            <div>
                <p>{t('after')}</p>
                <p>{t('pozvolaet')}</p>
            </div>
            <div>
                <p>{t('javaHave')}</p>
                <p>{t('nineths')}</p>
            </div>
            <div>
                <p>{t('moreCode')}</p>
                <p>{t('prichina')}</p>
            </div>
            <div>
                <p>{t('working')}</p>
                <p>{t('more')}</p>
            </div>
            <div className={s.button}>
                <Link to='/'>{t('finish')}</Link>
            </div>
        </div>
    )
}

export default LessonThree
