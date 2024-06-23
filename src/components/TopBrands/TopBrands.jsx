import React from 'react'
import './TopBrands.css'
import { brands } from '../../assets/assets'
import BestSeller from '../BestSeller/BestSeller'

const TopBrands = () => {

  return (
    <>
    
    <div className="brand-section">

      <div className="heading">
        <hr className="hr-left" />
        <h2>Top Brands</h2>
        <hr className="hr-right" />
      </div>
      <div className="bar">
        {brands.map((item,index)=>(
            <div key={index} className="card">
            <img src={item} alt="" />
        </div>
        ))}
      </div>
      <div className="heading-2">
        <div class="spot spot1"></div>
        <div class="spot spot2"></div>
        <div class="spot spot3"></div>
        <h1>Get Div coins on every order</h1>
      </div>

    </div>
    </>
  )
}

export default TopBrands
