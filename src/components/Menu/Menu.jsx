import React from 'react'
import { ReactComponent as Logo } from '../../common/icons/logo.svg'
import logoImg from '../../common/images/logo.png'
import s from './Menu.module.css'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Menu = ({ menu }) => {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div className={s.menu}>
      <div className={s.logoBlock}>
        <Logo />
      </div>
      <img src={logoImg} alt='logo' />
      {
        menu ?
          <div>{menu.map((link) =>
            <Link
              to={`/lessons/page/${link.id}`}
              className={Number(id) === link.id ? s.active : ''}
            >
              {link.text}
            </Link>
          )}</div>
          :
          <div>
            <Link to='/'>{t('glav')}</Link>
            <Link to='/courses'>{t('nashi')}</Link>
            <p>Статистика</p>
            <p>{t('ment')}</p>
            <p>{t('support')}</p>
          </div>
      }
    </div>
  )
}

export default Menu