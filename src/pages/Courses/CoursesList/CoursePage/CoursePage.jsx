import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import s from './CoursePage.module.css';
import axios from "axios";
import { Loader } from "../../../../components/Loader/Loader";
import test from '../../../../video/test.mp4'

const course = {
    titleName: 'title',
    theme: 'theme',
    video: test,
    test: [
        "Первые 30 секунд",
        "Вторые 30 секунд",
    ]
}

const CoursePage = () => {
    const { id } = useParams();
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const videoRef = useRef(null);
    const [, setVideoLength] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentText, setCurrentText] = useState(1);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.onloadedmetadata = () => {
                setVideoLength(video.duration.toFixed(2));
            };
            const updateTime = () => {
                setCurrentTime(video.currentTime.toFixed(2));
            };
            video.ontimeupdate = updateTime;
            return () => {
                video.ontimeupdate = null;
            };
        }
    }, []);

    useEffect(() => {
        if (Number(currentTime) > 30) setCurrentText(2)
        else setCurrentText(1)
    }, [currentTime])

    useEffect(() => {
        console.log(currentText);
    }, [currentText])

    // const [course, setCourse] = useState(null);

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios.get(`http://26.249.120.155:8000/get-lesson/${Number(id)}`)
    //         .then((res) => setCourse(res.data))
    //         .catch((err) => console.log(err))
    //         .finally(() => setIsLoading(false))
    // }, [id])

    if (!course) return <Loader />

    return (
        <div className={s.coursePage}>
            <h2>{course.titleName}</h2>
            <div className={s.content}>
                <div>
                    {
                        isActive ?
                            isLoading ?
                                <p>Загрузка</p>
                                :
                                // <p className={s.text}>{course.theme}</p>
                                <p className={s.text}>{
                                    course.test.find((_, i) => i + 1 === currentText)
                                }</p>
                            :
                            <button onClick={() => setIsActive(true)}>Показать текст</button>
                    }
                </div>
                <video ref={videoRef} controls>
                    {/* <source type="video/mp4" src={`data:video/mp4;base64,${course.video}`} /> */}
                    <source type="video/mp4" src={course.video} />
                </video>
            </div>
        </div>
    )
}

export default CoursePage

// import React, { useState, useEffect, useRef } from 'react';

// function VideoPlayer() {
//   const videoRef = useRef(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [texts] = useState(['Первый текст', 'Второй текст', 'Третий текст']);
//   const [currentText, setCurrentText] = useState('');

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       // Обновляем текущее время при изменении позиции воспроизведения
//       const updateTime = () => {
//         setCurrentTime(video.currentTime);
//       };
//       video.ontimeupdate = updateTime;

//       // Отписываемся от события при размонтировании компонента
//       return () => {
//         video.ontimeupdate = null;
//       };
//     }
//   }, []);

//   // Обновляем отображаемый текст в зависимости от текущего времени видео
//   useEffect(() => {
//     const index = Math.floor(currentTime / 30);
//     if (index < texts.length) {
//       setCurrentText(texts[index]);
//     }
//   }, [currentTime, texts]);

//   return (
//     <div>
//       <video ref={videoRef} controls>
//         <source src="your_video.mp4" type="video/mp4" />
//         Your browser does not support HTML5 video.
//       </video>
//       <p>{currentText}</p>
//     </div>
//   );
// }

// export default VideoPlayer;