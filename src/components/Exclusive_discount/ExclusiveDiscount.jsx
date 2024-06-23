import React from 'react'
import {
  bestsellers_1,
  example,
  freebies,
  loreal,
  mamaearth,
  output,
  prototype,
  suntan,
} from '../../assets/assets';
import './ExclusiveDiscount.css'

const ExclusiveDiscount = () => {
  return (
    <section className="Exclusive_Discount">
    <div className="heading">
        <hr className="hr-left" />
        <h2>Exclusive Discounts</h2>
        <hr className="hr-right" />
    </div>

    <div className="banner-container">
        <div className="banner-card">
            <a href="#"><img src={suntan} alt=""/></a>
        </div>
        <div className="banner-card">
            <a href="#"><img src={loreal} alt=""/></a>
        </div>
        <div className="banner-card">
            <a href="#"><img src={mamaearth} alt=""/></a>
        </div>
        <div className="banner-card">
            <a href="#"><img src={bestsellers_1} alt=""/></a>
        </div>
    </div>

    <div className="banner-image">
        <button style={{border:'none'}}><a href="#">
        <img src={freebies} alt=""/>
            </a></button>
    </div>
</section>
  )
}

export default ExclusiveDiscount
