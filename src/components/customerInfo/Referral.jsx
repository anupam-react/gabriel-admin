import React, { useState } from "react";
import "./index.css";
import { DialogDefault } from "../common/DilogBox";
import CatalogueProduct from "./CatalogueProduct";
const Referral = ({ handleOpen }) => {
  const [openAlert, setOpenAlert] = useState(false);
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Referral Reward</p>
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
      <div className="catalogue">
      
        <CatalogueProduct />
      </div>
      <div className="form-container">
        <div className="input-container">
          <label>Custom Message</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            value="Your slice awaits you. Received a cake voucher when you refer a friend and make your first transaction with us."
            className="input"
          />
        </div>
        <div className="input-container">
          <label>Exclusive Link</label>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder=""
            value="https://www.Moneychat.com/slic e/referralvoucher"
          />
        </div>
      </div>
      <div className="flex-center">
        <button
          className="menuButton"
          onClick={() => {
            setOpenAlert(true);
          }}
        >
         SEND NOTIFICATION 
        </button>
      </div>
      <DialogDefault open={openAlert} handleOpen={setOpenAlert}>
        <div className="success-alert">
          <div className="cross-image2">
            <img
              src="./Mask group (2).png"
              alt=""
              className=""
              onClick={() => {
                setOpenAlert(false);
              }}
            />
          </div>
          <p>
           Your Refeeral  Reward bonus has been sent to
Customer ID :  #98BB212
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default Referral;
