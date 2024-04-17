import React from 'react'
import s from './Lessons.module.css'
import java from '../../common/images/java.png'
import { ReactComponent as Lock } from '../../common/icons/lock.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LessonBlock = (props) => {
  const { t } = useTranslation();

  let listArr = [];
  for (let i = 0; i < props.lessons; i++) {
    listArr.push(i);
  }

  return (
    <div className={s.lessonBlock}>
      <span>
        <h2><p>{t('lesson')} {props.title}</p> {props.theme}</h2>
        <img src={java} alt='java' />
      </span>
      <span className={s.lines}>
        {listArr.map((_, i) => <Link to='/lessons/page/1' className={props.compleated >= i + 1 ? s.finished : ''} />)}
      </span>
      <h5>{t('lessonsList.compleat')} {props.compleat} {t('lessonsList.all')}</h5>
      <button>
        <Link to='/lessons/page/1'>{props.compleat === '100%' ? t('repeat') : t('continue')}</Link>
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
  const { t } = useTranslation();

  const lessonArray = [
    {
      id: 0,
      title: 1,
      theme: t('lessonsList.introduction'),
      compleat: '100%',
      isBlocked: false,
      lessons: 8,
      compleated: 8
    },
    {
      id: 1,
      title: 2,
      theme: t('lessonsList.download'),
      compleat: '0%',
      isBlocked: false,
      lessons: 8,
      compleated: 0
    },
    {
      id: 0,
      title: 3,
      theme: t('lessonsList.write'),
      compleat: '0%',
      isBlocked: true,
      lessons: 8,
      compleated: 0
    },
  ]

  return (
    <div className={s.lessons}>
      <h1>{t('lessonsList.programmCourse')}</h1>
      <ul>
        <li><h5>{t('lessonsList.oop')}</h5></li>
        <li><h5>{t('lessonsList.getSkills')}</h5></li>
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