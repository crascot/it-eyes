import s from './About.module.css'
import { ReactComponent as Share } from '../../common/icons/share.svg'
import { ReactComponent as Security } from '../../common/icons/security.svg'
import { ReactComponent as Community } from '../../common/icons/community.svg'
import { ReactComponent as Logo } from '../../common/icons/logo2.svg'
import { ReactComponent as PlusGreen } from '../../common/icons/plus-green.svg'
import { ReactComponent as PlusRed } from '../../common/icons/plus-red.svg'
import { ReactComponent as PlusBlue } from '../../common/icons/plus-blue.svg'
import { Form } from './Form/Form'

const About = () => {
  return (
    <div className={s.about}>
      <div className={s.learning}>
        <h1>Изучаем Java с нуля!</h1>
        <h2>
          Наш курс обучит вас программированию на Java с абсолютного нуля.
          Вы освоите базовые принципы, научитесь создавать приложения и разберетесь с ООП.
          Подготовьтесь к захватывающему погружению в мир программирования!
        </h2>
      </div>
      <div className={s.whyJava}>
        <h1>Почему Java?</h1>
        <h2>
          Java - язык программирования, который выбирают тысячи разработчиков по всему миру.
        </h2>
      </div>
      <div className={s.horizontal}>
        <div>
          <Share />
          <h2>Универсальность и Портативность</h2>
        </div>
        <div>
          <Security />
          <h2>Надежность и Безопасность</h2>
        </div>
        <div>
          <Community />
          <h2>Большое сообщество и Обширная библиотека</h2>
        </div>
      </div>

      <h3 className={s.ourCourse}>
        Наш  курс  <span>"Изучаем Java с нуля!"</span>
        предлагает уникальные  преимущества,
        которые  делают  его отличным  выбором
        для  вашего  обучения
      </h3>

      <div className={s.weAre}>
        <h1><Logo /></h1>
        <div style={{borderTop: '3px solid #00CC33'}}>
          <h2>Глубокое Погружение в Java</h2>
          <PlusGreen />
        </div>
        <div style={{borderTop: '3px solid #EF233C'}}>
          <h2>Практический Опыт</h2>
          <PlusRed />
        </div>
        <div style={{borderTop: '3px solid #08BDBD'}}>
          <h2>Гибкий График Обучения</h2>
          <PlusBlue />
        </div>
      </div>

      <div className={s.start}>
        <button>Начать обучение!</button>
      </div>

      <Form />
    </div>
  )
}

export default About