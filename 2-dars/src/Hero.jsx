import React from 'react'
import "./Hero.css";
import hero from './images/hero.png';
import avatar1 from './images/avatar-1.png';

export const Hero = () => {
  return (
      
   
    <section className="hero">
    <img src={hero} alt="" />
    <div className="container">
      <div className="hero__card">
        <div className="hero__card__wrapper">
          <h3 className='hero__card__title'>5 mind blowing facts about the iPhone 14</h3>
          <div className="card__bottom">
            <img src={avatar1} alt="" />
            <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Hero