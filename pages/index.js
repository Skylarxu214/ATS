import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components';
const Home = () => {
  return (
    <>
    <HeroBanner/>
   
    <div className= 'products-heading'>
      <h2>Best Selling Jewels</h2>
      <p>Find Your Fav!!</p>
    </div>

    <div className= 'products-container'>
      {['Product1', 'Product2'].map(
        (product) => product)}
    </div>

   <FooterBanner/>
      </>
  )
}

export default Home