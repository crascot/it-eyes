import React, { useEffect, useState } from "react";
import s from './CoursesList.module.css';
import java from '../../../common/images/java.png';
import { useNavigate } from "react-router-dom";
import { ReactComponent as Lock } from '../../../common/icons/lock.svg';
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Loader } from "../../../components/Loader/Loader";

const CourseBlock = (props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className={s.courseBlock}>
            <span>
                <h2><p>{t('lesson')} {props.index}</p> {props.titleName}</h2>
                <img src={`data:image/jpeg;base64,${props.image}`} alt="course" />
            </span>
            <span>
                <button onClick={() => navigate(`/courses-list/course/${props.index}`)}>
                    {t('startButton')}
                </button>
                <img src={java} alt="sprite" />
            </span>
            {
                props.isblocked ?
                    <div className={s.close}><Lock /></div>
                    :
                    ''
            }
        </div>
    )
}

const CoursesList = () => {
    const { t } = useTranslation();
    const [coursArray, setCoursArray] = useState([]);

    const getCourses = () => {
        axios.get('http://26.249.120.155:8000/get-lessons/')
            .then((res) => setCoursArray(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getCourses();
    }, [])

    if (!coursArray.length) return <Loader />

    return (
        <div className={s.courses}>
            <h1>{t('lessonsList.programmCourse')}</h1>
            <div className={s.list}>
                {
                    coursArray.map((course, i) =>
                        <CourseBlock
                            id={course.id}
                            titleName={course.titleName}
                            image={course.image}
                            isblocked={course.isblocked}
                            index={i + 1}
                        />)
                }
            </div>
        </div>
    )
}

export default CoursesList;