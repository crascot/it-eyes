import React from 'react'
import ComponentWithMenu from '../../components/ComponentWithMenu/ComponentWithMenu'
import { useParams } from 'react-router-dom'
import LessonOne from './lessons/lesson-one'
import LessonTwo from './lessons/lesson-two'
import LessonThree from './lessons/lesson-three'
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation();

    const menuNavigate = [
        {
            id: 1,
            text: t('vvedenie')
        },
        {
            id: 2,
            text: t('langJava')
        },
        {
            id: 3,
            text: t('whyJavaMenu')
        }
    ]

    return (
        <ComponentWithMenu child={<Lesson id={id} />} menu={menuNavigate} />
    )
}

export default LessonPage