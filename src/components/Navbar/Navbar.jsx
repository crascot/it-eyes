import React from 'react'
import { ReactComponent as Search } from '../../common/icons/search.svg'
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.search}>
                <input />
                <Search />
            </div>
            <div className={s.navLinks}>
                <p>Новости</p>
                <Link to='/settings'>Настроить</Link>
                <p>Трансляции online</p>
            </div>
        </div>
    )
}