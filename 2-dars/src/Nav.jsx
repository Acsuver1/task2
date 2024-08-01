import React from 'react'
import "./Nav.css";
import navbarLogo from './images/navbar-logo.svg';
import profileAvatar from './images/avatar.svg';
import present from './images/present.svg';
import notifications from './images/notif.svg';

export const Nav = () => {
  return (
    <nav className='nav'>
    <div className="container">
      <div className="nav__wrapper">
        <img className='nav__logo' src={navbarLogo} alt="" />
        <div className="nav__right">
          <div className="nav__profile">
            <img className='profile__logo' src={profileAvatar} alt="" />
            <select className='profile__user'>
              <option value="Bruce Lee">Bruce Lee</option>
        </select>
          </div>
          <div className="nav__extra">
            <a className='nav__prize' href="#"><img src={present} alt="" /></a>
            <a className='nav__notifications' href="#"><img src={notifications} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
export default Nav
