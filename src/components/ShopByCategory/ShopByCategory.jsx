import React from 'react'
import  {
    background,
    Brush,
    Eyes,
    Lips,
    SkinCare,
    Nails,
    Face,
   } from  '../../assets/assets';
import './ShopByCategory.css'

const ShopByCategory = () => {
  return (
    <>
     <section className="Shop_By_Category">
        <div  style={{
                        backgroundImage: `url(${background})`
                    }} className="main">
            <div className="heading">
                <hr className="hr-left"/>
                <h2>Shop By Categories</h2>
                <hr className="hr-right"/>
            </div>
            <div className="content">
                <div className="categories-container categ">
                    <div  style={{ backgroundImage: `url(${Eyes})` }} className="categories-item eyes"><a href="https://">
                            <div className="label">Eyes</div>
                        </a></div>
                    <div  style={{
                        backgroundImage: `url(${Face})`
                    }} className="categories-item face"><a href="http://">
                            <div className="label">Face</div>
                        </a></div>
                    <div  style={{
                        backgroundImage: `url(${Lips})`
                    }} className="categories-item lips"><a href="http://">
                            <div className="label">Lips</div>
                        </a></div>
                    <div  style={{
                        backgroundImage: `url(${SkinCare})`
                    }} className="categories-item skincare"><a href="http://">
                            <div className="label">Skincare</div>
                        </a></div>
                    <div  style={{
                        backgroundImage: `url(${Nails})`
                    }} className="categories-item nails"><a href="http://">
                            <div className="label">Nails</div>
                        </a></div>
                    <div  style={{
                        backgroundImage: `url(${Brush})`
                    }} className="categories-item brush"><a href="http://">
                            <div className="label">Brush</div>
                        </a></div>

                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default ShopByCategory
