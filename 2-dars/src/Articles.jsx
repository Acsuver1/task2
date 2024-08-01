import React from 'react'
import "./Articles.css";

import avatar1 from './images/avatar-1.png';
import article1 from './images/article-1.png';
import article2 from './images/article-2.png';
import article3 from './images/article-3.png';
import article4 from './images/article-4.png';
import article5 from './images/article-5.png';
import article6 from './images/article-6.png';
import avatar2 from './images/avatar-2.png';
import avatar3 from './images/avatar-3.png';
import avatar4 from './images/avatar-4.png';
import avatar5 from './images/avatar-5.png';
import avatar6 from './images/avatar-6.png';
export const Articles = () => {
  return (
    <section className="articles">
    <div className="container">
      <h3 className='articles__title'>Featured articles</h3>
      <div className="articles__cards">
        <div className="articles__card">
          <img src={article1} alt="" />
          <div className="articles__content">
            <h4 className="articles__card__title">10 beaches you must visit</h4>
            <div className="card__bottom">
              <img src={avatar6} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>
        </div>
        <div className="articles__card">
          <img src={article2} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title">10 beaches you must visit</h4>
            <div className="card__bottom">
              <img src={avatar1} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>
        </div>
        <div className="articles__card">
          <img src={article3} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title">10 beaches you must visit</h4>
            <div className="card__bottom">
              <img src={avatar2} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>
        </div>
        <div className="articles__card">
          <img src={article4} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title">10 beaches you must visit</h4>
            <div className="card__bottom">
              <img src={avatar3} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>
        </div>
        <div className="articles__card">
          <img src={article5} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title">10 beaches you must visit</h4>
            <div className="card__bottom">
              <img src={avatar4} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>
        </div>
        <div className="articles__card">
          <img src={article6} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title">10 beaches you must visit</h4>
            <div className="card__bottom">
              <img src={avatar5} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
  
}

export default Articles