import React from 'react'
import './Offers.css'
import exclusive_image from '../asset/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <br></br>
        <br></br>
         <h1>Exclusive</h1>
         <h1>Offers For You</h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offers
