import { useState } from 'react'
import './App.css'
import BestSeller from './components/BestSeller/BestSeller'
import TopBrands from './components/TopBrands/TopBrands'
import ExclusiveDiscount from './components/Exclusive_discount/ExclusiveDiscount'
import ShopByCategory from './components/ShopByCategory/ShopByCategory'
import Subscription from './components/Subscription/Subscription'
import Banner from './components/Banner/Banner'


function App() {
 

  return (
    <>
    {/* <BestSeller/> */}
    <div className="app">
    <Banner/>
    <BestSeller/>
    <TopBrands/>
    <ExclusiveDiscount/>
    <ShopByCategory/>
    <Subscription/>
    
    </div>
    </>
   
  )
}

export default App
