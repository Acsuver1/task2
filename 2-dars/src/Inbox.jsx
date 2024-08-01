import React from 'react'
import "./Inbox.css";
import action from './images/action.png';
import arrow from './images/arrow.svg';
export const Inbox = () => {
  return (
    <section className='action'>
    <div className="container">
      <div className="action__wrapper">
        <img className='action__image' src={action} alt="" />
        <div className="action__content">
          <h3 className='action__title'>Incredible deals, right to your inbox!</h3>
          <div className="action__input__wrapper">
            <input className='action__input' type="text" placeholder='Placeholder' />
            <button className='action__button'>
              <img src={arrow} alt="" />
            </button>
          </div>
          <a className='action__link' href="#">By joining you agree to our Terms and Conditions</a>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Inbox