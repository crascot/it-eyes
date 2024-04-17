import { useParams } from "react-router-dom";
import video from '../../../../video/test.mp4';
import s from './CoursePage.module.css';
import { useState } from "react";
import img from '../../../../video/java.jpg';

const test = {
    title: 'Мобильная разработка Android приложений',
    video: video,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate molestiae consequuntur aliquam labore fugiat sint veritatis voluptatibus quas natus, tempore necessitatibus, assumenda ullam harum totam quo sapiente ipsam nam quaerat!s'
}

const CoursePage = () => {
    const { id } = useParams();
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getText = () => {
        setIsActive(!isActive);
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }

    const textFunc = () => {
        if (isActive) {
            if (isLoading) {
                return <p>Загрузка</p>
            }
            return <p>{test.text}</p>
        }
    }

    return (
        <div className={s.coursePage}>
            <h2>{test.title}</h2>
            <div className={s.content}>
                {/* <video src={test.video} /> */}
                <img src={img} />
                {
                    isActive ?
                        textFunc()
                        :
                        <button onClick={getText}>Показать текст</button>
                }
            </div>
        </div>
    )
}

export default CoursePage;