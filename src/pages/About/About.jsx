import s from './About.module.css'
import { ReactComponent as Share } from '../../common/icons/share.svg'
import { ReactComponent as Security } from '../../common/icons/security.svg'
import { ReactComponent as Community } from '../../common/icons/community.svg'
import { ReactComponent as Logo } from '../../common/icons/logo2.svg'
import { ReactComponent as PlusGreen } from '../../common/icons/plus-green.svg'
import { ReactComponent as PlusRed } from '../../common/icons/plus-red.svg'
import { ReactComponent as PlusBlue } from '../../common/icons/plus-blue.svg'
import { Form } from './Form/Form'
import { useTranslation } from 'react-i18next'
import logo2 from '../../common/images/logo2.png'

const About = () => {
  const { t } = useTranslation()
  const lang = localStorage.getItem('i18nextLng')

  return (
    <div className={s.about}>
      <div className={s.learning}>
        <h1>{t('start.learnJava')}</h1>
        <h2>{t('start.ourCourse')}</h2>
      </div>
      <div className={s.whyJava}>
        <h1>{t('start.whyJava')}</h1>
        <h2>{t('start.javaIs')}</h2>
      </div>
      <div className={s.horizontal}>
        <div>
          <Share />
          <h2>{t('start.universal')}</h2>
        </div>
        <div>
          <Security />
          <h2>{t('start.safety')}</h2>
        </div>
        <div>
          <Community />
          <h2>{t('start.library')}</h2>
        </div>
      </div>

      <h3 className={s.ourCourse}>
        {t('start.our')}  <span>"{t('start.ourCourse2')}" </span>
        {t('start.unical')}
      </h3>

      <div className={s.weAre}>
        <h1>
          {
            lang === 'ru' ?
              <Logo />
              :
              <img style={{ width: 400, margin: '-100px' }} src={logo2} alt='logo' />
          }
        </h1>
        <div style={{ borderTop: '3px solid #00CC33' }}>
          <h2>{t('start.deep')}</h2>
          <PlusGreen />
        </div>
        <div style={{ borderTop: '3px solid #EF233C' }}>
          <h2>{t('start.practicSkill')}</h2>
          <PlusRed />
        </div>
        <div style={{ borderTop: '3px solid #08BDBD' }}>
          <h2>{t('start.graphic')}</h2>
          <PlusBlue />
        </div>
      </div>

      <div className={s.start}>
        <button>{t('start.startLearn')}</button>
      </div>

      <Form />
    </div>
  )
}

export default About