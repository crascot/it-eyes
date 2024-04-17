import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from './CoursePage.module.css';
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";

const CoursePage = () => {
    const { id } = useParams();
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [course, setCourse] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://26.249.120.155:8000/get-lesson/${Number(id)}`)
            .then((res) => setCourse(res.data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }, [id])

    if (!course) return <Loader />

    return (
        <div className={s.coursePage}>
            <h2>{course.titleName}</h2>
            <div className={s.content}>
                <div>
                    {
                        isActive ?
                            isLoading ? <p>Загрузка</p> : <p className={s.text}>{course.theme}</p>
                            :
                            <button onClick={() => setIsActive(true)}>Показать текст</button>
                    }
                </div>
                <video controls>
                    <source type="video/mp4" src={`data:video/mp4;base64,${course.video}`} />
                </video>
            </div>
        </div>
    )
}

export default CoursePage