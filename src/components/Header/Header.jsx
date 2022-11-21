import React from 'react'
import css from "./header.module.css"
import userLogo from "./img/user-logo.svg"
import arrow from "./img/arrow.svg"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>    
      <div className={css.header}>
        <div className={css.title}><Link to={`./`}>Awesome Kanban Board</Link></div>
        <div className={css.user}>
          <div className={css.user__logo}>
            <img className={css.user__logo_img} src={userLogo} alt="" />
          </div>
          <div className={css.user__drop}>
            <img className={css.user__drop_arrow} src={arrow} alt="" />
          </div>
        </div>
      </div>
      </>
  )
}
