import React, { useState } from 'react'
import { DialogDefault } from '../common/DilogBox';
import "./index.scss";
import CatalogueProduct from './CatalogueProduct';
const TargetPoints = ({handleOpen}) => {
     const [openSuccess, setSuccess] = useState(false);
  return (
  <div className="gift-container">
      <div className="gift-main">
        <p className="title">Stamps to a customer after purchase</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => {
            handleOpen(false);
          }}
        />
      </div>
          <hr className="hr" />
           <div className="catalogue2">
           <label>Select Product from catalogue</label>
        <CatalogueProduct />
      </div>
      <div className="button-group">
        <button className="button2" style={{fontSize:"18px"}} onClick={() => setSuccess(true)}>
          5 Stamps
        </button>
        <button className="button1" style={{fontSize:"18px"}} onClick={() => setSuccess(true)}>
          10 Stamps
        </button>
        <button className="button1" style={{fontSize:"18px"}} onClick={() => setSuccess(true)}>
          20 Stamps
        </button>
          </div>
           
      <div className="form-container">
        <div className="input-container">
          <label>Custom Points</label>
          <input type="text" name="" id="" className="input" placeholder="" value="40 Points"/>
        </div>
        <div className="input-container">
          <label>Custom Message</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="3"
            cols="50"
                      className="input"
                      value="Get 3 stamps on your next purchase when you buy mediumsized latté."
          />
              </div>
               <div className="input-container">
          <label>Expiry Date</label>
          <input type="text" name="" id="" className="input" placeholder="" value="10/12/2023,12: 00 PM"/>
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={() => setSuccess(true)}>
          SEND NOTIFICATION
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
         <div className="success-alert">
          <div className="cross-image2">
            <img
              src="./Mask group (2).png"
              alt=""
              className=""
              onClick={() => {
                setSuccess(false);
              }}
            />
          </div>
          <p>
        Your Stamps to a customer after purchase has been sent to
Customer ID :  #98BB212
          </p>
        </div>
      </DialogDefault>
    </div>
  )
}

export default TargetPoints
