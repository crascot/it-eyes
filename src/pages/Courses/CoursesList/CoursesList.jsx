import React from "react";
import s from './CoursesList.module.css';
import java from '../../../common/images/java.png';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Lock } from '../../../common/icons/lock.svg';
import test from '../../../video/java.jpg';

const coursArray = [
    {
        id: 0,
        title: 'Сабак 1',
        theme: 'Тема которую мы в будущем добавим а сейчас это для вида',
        isBlocked: false
    },
    {
        id: 1,
        title: 'Сабак 2',
        theme: 'Тема которую мы в будущем добавим а сейчас это для вида',
        isBlocked: false
    },
    {
        id: 3,
        title: 'Сабак 3',
        theme: 'Тема которую мы в будущем добавим а сейчас это для вида',
        isBlocked: true
    }
]

const CourseBlock = (props) => {
    const navigate = useNavigate();

    return (
        <div className={s.courseBlock}>
            <span>
                <h2><p>{props.title}</p> {props.theme}</h2>
                <img src={test} alt='java' />
            </span>
            <span>
                <button onClick={() => navigate(`/courses-list/course/${props.id}`)}>
                    Начать
                </button>
                <img src={java} alt="sprite" />
            </span>
            {
                props.isBlocked ?
                    <div className={s.close}><Lock /></div>
                    :
                    ''
            }
        </div>
    )
}

const CoursesList = () => {
    return (
        <div className={s.courses}>
            <h1>Программа курса</h1>
            <div className={s.list}>
                {
                    coursArray.map(course => <CourseBlock
                        id={course.id}
                        title={course.title}
                        theme={course.theme}
                        isBlocked={course.isBlocked}
                    />)
                }
            </div>
        </div>
    )
}

export default CoursesList;