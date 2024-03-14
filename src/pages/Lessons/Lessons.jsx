import React from 'react'
import s from './Lessons.module.css'
import java from '../../common/images/java.png'
import { ReactComponent as Lock } from '../../common/icons/lock.svg'
import { Link } from 'react-router-dom'

const lessonArray = [
  {
    id: 0,
    title: 1,
    theme: 'Введение в программирование',
    compleat: '100%',
    isBlocked: false,
    lessons: 8,
    compleated: 8
  },
  {
    id: 1,
    title: 2,
    theme: 'Установка программ.',
    compleat: '0%',
    isBlocked: false,
    lessons: 8,
    compleated: 0
  },
  {
    id: 0,
    title: 3,
    theme: 'Консольный ввод / вывод',
    compleat: '0%',
    isBlocked: true,
    lessons: 8,
    compleated: 0
  },
]

const LessonBlock = (props) => {
  let listArr = [];
  for (let i = 0; i < props.lessons; i++) {
    listArr.push(i);
  }

  return (
    <div className={s.lessonBlock}>
      <span>
        <h2><p>Урок {props.title}</p> {props.theme}</h2>
        <img src={java} alt='java' />
      </span>
      <span className={s.lines}>
        {listArr.map((_, i) => <Link to='/lessons/page/1' className={props.compleated >= i + 1 ? s.finished : ''} />)}
      </span>
      <h5>пройдено {props.compleat} всего материала</h5>
      <button>
        <Link to='/lessons/page/1'>{props.compleat === '100%' ? 'Повторить' : 'Продолжить'}</Link>
      </button>
      {
        props.isBlocked ?
          <div className={s.close}><Lock /></div>
          :
          ''
      }
    </div>
  )
}

const Lessons = () => {
  return (
    <div className={s.lessons}>
      <h1>Программа курса</h1>
      <ul>
        <li><h5>Изучите Обьектно Ориентированное Программирование</h5></li>
        <li><h5>Научитесь создавать мобильные приложения</h5></li>
        <li><h5>Наберетесь опыта в командной разработке</h5></li>
      </ul>

      <div className={s.list}>
        {
          lessonArray.map((block) =>
            <LessonBlock
              id={block.id}
              title={block.title}
              theme={block.theme}
              compleat={block.compleat}
              isBlocked={block.isBlocked}
              lessons={block.lessons}
              compleated={block.compleated}
            />)
        }
      </div>
    </div>
  )
}

export default Lessons