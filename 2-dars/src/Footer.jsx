import React from 'react'
import "./Footer.css";

import arrow from './images/arrow.svg';
import footerLogo from './images/footer-logo.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import be from './images/be.svg';
export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="footer__top__wrapper">
              <div className="footer__top__card">
              <div className="footer__col">
                <h4 className='footer__title'>First Column</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link one</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link two</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link three</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link four</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>Second Column</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link one</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link two</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link three</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link four</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>Third Column</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link one</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link two</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link three</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link four</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>Fourth Column</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link one</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link two</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link three</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link four</a>
                  </li>
                </ul>
              </div>
              </div>
              <div className="footer__form">
                <h4 className='footer__form__title'>Never miss an update</h4>
                <div className="footer__input__wrapper">
                  <input className='action__input' type="text" placeholder='Placeholder' />
                  <button className='action__button'>
                    <img src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom__content">
              <img src={footerLogo} alt="" />
              <a className='footer__bottom__link' href="#">© 2019 Fabrx </a>
              <div className="footer__bottom__webs">
                <a className='footer__bottom__web__link' href="#">
                  <img src={facebook} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={instagram} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={twitter} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={be} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer