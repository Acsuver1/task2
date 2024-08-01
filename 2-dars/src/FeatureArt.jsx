import React from 'react'
import "./FeatureArt.css";
import article7 from './images/article-7.png';
import article8 from './images/article-8.png';
import article9 from './images/article-9.png';
import article10 from './images/article-10.png';
import article11 from './images/article-11.png';
import avatar1 from './images/avatar-1.png';

export const FeatureArt = () => {
  return (
    <section className="articles-2">
    <div className="container">
  <h3 className='articles__title'>Featured articles</h3>
    <div className="articles__cards-2">
  <div className="articles__card-2">
 <img src={article7} alt="" />
 <div className="articles__content">
        <h4 className="articles__card__title-2">Pathway to the Mediterranean</h4>
    <div className="card__bottom">
    <img src={avatar1} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>
        <div className="articles__card-2">
          <img src={article8} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title-2">My awesome safari in Lahbab Desert, United Arab Emirates</h4>
            <div className="card__bottom">
              <img src={avatar1} alt="" />
          <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
    </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>
        <div className="articles__card-2">
          <img src={article9} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title-2">10 amazing things to do in Cuba</h4>
            <div className="card__bottom">
              <img src={avatar1} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>
        <div className="articles__card-2">
          <img src={article10} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title-2">The best street food in the world. Ranked!</h4>
            <div className="card__bottom">
              <img src={avatar1} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>
        <div className="articles__card-2">
          <img src={article11} alt="" />
          <div className="articles__content">
          <h4 className="articles__card__title-2">Travel Packing guide for beginners</h4>
            <div className="card__bottom">
              <img src={avatar1} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>
      </div>
      <div className="articles-2__link">
        <a className='articles__link' href="#">Load more</a>
      </div>
    </div>
  </section>
  )
}

export default FeatureArt