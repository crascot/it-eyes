import React from 'react'
import s from './lesson.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LessonTwo = () => {
    const { t } = useTranslation();

    return (
        <div className={s.lesson}>
            <h3>{t('lang')}</h3>
            <p>{t('nabor')}</p>
            <p>{t('onThisCourse')}</p>
            <p>{t('javaThisMost')}</p>
            <ul>
                <li>{t('minecraft')}</li>
                <li>{t('internet')}</li>
                <li>{t('socts')}</li>
                <li>{t('pay')}</li>
            </ul>
            <p>{t('krome')}</p>
            <div className={s.button}>
                <Link to='/lessons/page/3'>{t('next')}</Link>
            </div>
        </div>
    )
}

export default LessonTwo