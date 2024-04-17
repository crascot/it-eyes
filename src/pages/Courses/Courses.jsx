import React from 'react'
import s from './Courses.module.css'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
    const navigate = useNavigate();

    return (
        <div className={s.courses}>
            <div>
                <h2>Веб-разработка на Java</h2>
                <button onClick={() => navigate('/lessons')}>Начать</button>
            </div>
            <div>
                <h2>Мобилдик тиркемелерди иштеп чыгуу</h2>
                <button onClick={() => navigate('/courses-list')}>Начать</button>
            </div>
        </div>
    )
}

export default Courses