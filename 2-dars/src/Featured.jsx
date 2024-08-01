import React from 'react'
import "./Featured.css";
import keyboard from './images/keyboard.png';
import avatar1 from './images/avatar-1.png';

export const Featured = () => {
  return (
    <section className="featured">
    <div className="container">
      <img src={keyboard} alt="" />
      <div className="featured__card">
        <span className='featured__main__title'>Featured</span>
        <h3 className='featured__title'>Beached to take you somewhere else</h3>
        <div className="card__bottom">
          <img src={avatar1} alt="" />
          <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
        </div>
      </div>
    </div>
  </section>

  )
}
export default Featured