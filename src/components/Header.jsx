import React from 'react'
import "./header.css"
import userLogo from "./img/user-logo.svg"
import arrow from "./img/arrow.svg"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>    
      <div className='footer'>
        <div className='title'><Link to={`./`}>Awesome Kanban Board</Link></div>
        <div className='user'>
          <div className='user__logo'>
            <img className='user__logo_img' src={userLogo} alt="" />
          </div>
          <div className='user__drop'>
            <img className='user__drop_arrow' src={arrow} alt="" />
          </div>
        </div>
      </div>
      </>
  )
}
