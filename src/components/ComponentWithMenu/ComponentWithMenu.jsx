import React from 'react'
import Menu from '../Menu/Menu'
import s from './ComponentWithMenu.module.css'
import { Navbar } from '../Navbar/Navbar'

const ComponentWithMenu = ({ child, menu }) => (
  <div className={s.container}>
    <Menu menu={menu} />
    <div className={s.block}>
      <Navbar />
      {child}
    </div>
  </div >
)

export default ComponentWithMenu