import React from 'react'
import ComponentWithMenu from '../../components/ComponentWithMenu/ComponentWithMenu'
import { useParams } from 'react-router-dom'
import LessonOne from './lessons/lesson-one'
import LessonTwo from './lessons/lesson-two'
import LessonThree from './lessons/lesson-three'

const menuNavigate = [
    {
        id: 1,
        text: '1.Введение в IT'
    },
    {
        id: 2,
        text: '2.Язык JAVA'
    },
    {
        id: 3,
        text: '3.Почему JAVA?'
    }
]

const Lesson = ({ id }) => {
    switch (Number(id)) {
        case 1:
            return <LessonOne />
        case 2:
            return <LessonTwo />
        case 3:
            return <LessonThree />
        default:
            break;
    }
}

const LessonPage = () => {
    const { id } = useParams();

    return (
        <ComponentWithMenu child={<Lesson id={id} />} menu={menuNavigate} />
    )
}

export default LessonPage