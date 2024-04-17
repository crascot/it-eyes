import React from 'react'
import s from './lesson.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LessonOne = () => {
    const { t } = useTranslation();

    return (
        <div className={s.lesson}>
            <h3>{t('lessonsList.introduction')}</h3>
            <p>{t('lessonPage.programming')}</p>
            <p>{t('example')}</p>
            <ul>
                <li>{t('lessonPage.calculator')}</li>
                <li>{t('lessonPage.whatsapp')}</li>
                <li>{t('lessonPage.google')}</li>
            </ul>
            <p>{t('lessonPage.choose')}</p>
            <div className={s.button}>
                <Link to='/lessons/page/2'>{t('next')}</Link>
            </div>
        </div>
    )
}

export default LessonOne