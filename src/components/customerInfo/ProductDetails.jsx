import React from 'react'
import "./index.scss";
const ProductDetails = ({handleOpen}) => {
  return (
    <div className='details-container'>
     <p className="details-title">Product Details</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={() => handleOpen(false)}
      />
      <img src="./image 711.png" alt="" className='details-image' />
      <div className='details-info'>
        <div className='info2'>
          <p>Product</p>
          <p>Dunkins  Coffee</p>
        </div>
        <div className='info2'>
          <p>Price</p>
          <p>£200</p>
        </div>
        <div className='info2'>
          <p>Date</p>
          <p>10/12/2023</p>
        </div>
        <div className='info2'>
          <p>Available in store </p>
          <p style={{color:"#00B050"}}>Yes</p>
        </div>
        <div className='info2'>
          <p>Available in online </p>
          <p>NO</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
