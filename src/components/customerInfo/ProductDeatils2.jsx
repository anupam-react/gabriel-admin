import React from 'react'
import "./index.scss";
import CatalogueProduct from './CatalogueProduct';
const ProductDetails2 = ({handleOpen}) => {
  return (
    <div className='details-container'>
     <p className="details-title">Product Details</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={() => handleOpen(false)}
      />
      <img src="./image 713 (1).png" alt="" className='details-image2' />
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
          <p>Availablein Store/Online </p>
          <p>Store</p>
        </div>
          </div>
          <hr style={{ margin: "20px 0px", width: "100%" }} />
           <div className="catalogue">
        <label>Select more Product from catalogue</label>
        <CatalogueProduct />
      </div>
    </div>
  )
}

export default ProductDetails2
