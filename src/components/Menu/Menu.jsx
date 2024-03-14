import React from 'react'
import { ReactComponent as Logo } from '../../common/icons/logo.svg'
import logoImg from '../../common/images/logo.png'
import s from './Menu.module.css'
import { Link, useParams } from 'react-router-dom'

const Menu = ({ menu }) => {
  const { id } = useParams();

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
            <Link to='/'>Главная</Link>
            <Link to='/lessons'>Уроки</Link>
            <a href="/">Статистика</a>
            <a href="/">Менторы</a>
            <a href="/">Поддержка</a>
          </div>
      }
    </div>
  )
}

export default Menu