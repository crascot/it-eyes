import React from 'react'
import s from './Courses.module.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Courses = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className={s.courses}>
            <div>
                <h2>{t('ourCourses.web')}</h2>
                <button onClick={() => navigate('/lessons')}>{t('startButton')}</button>
            </div>
            <div>
                <h2>{t('ourCourses.mobile')}</h2>
                <button onClick={() => navigate('/courses-list')}>{t('startButton')}</button>
            </div>
        </div>
    )
}

export default Courses