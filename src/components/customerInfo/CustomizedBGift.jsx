import React, { useState } from "react";
import "./index.scss";
import CatalogueProduct from "./CatalogueProduct";
import { DialogDefault } from "../common/DilogBox";
const CustomizedBGift = ({ handleOpen }) => {
  const [openAlert, setOpenAlert] = useState(false);
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Send Birthday Gift</p>
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
        <label>Select Product from catalogue</label>
        <CatalogueProduct />
      </div>
      <div className="form-container">
        <div className="input-container">
          <label>Add your Customized Product</label>
          <input type="text" name="" id="" className="input" placeholder="" />
        </div>
        <div className="input-container">
          <label>Header Text</label>
          <input type="text" name="" id="" className="input" placeholder="" />
        </div>
        <div className="input-container">
          <label>Description</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            className="input"
          />
        </div>

        <div className="input-container">
          <label>Expiry Date</label>
          <input type="text" name="" id="" className="input" placeholder="" />
        </div>
        <div className="input-container">
          <label>Price Rate</label>
          <input type="text" name="" id="" className="input" placeholder="" />
        </div>

        <div className="input-container">
          <label>Terms & Conditions</label>
          <input type="text" name="" id="" className="input" placeholder="" />
        </div>
      </div>
      <div className="flex-center">
        <button
          className="menuButton"
          onClick={() => {
            setOpenAlert(true);
          }}
        >
          SUBMIT
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
            Your customize Birthday gift has been successfully sent to Customer
            ID : #98BB212
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default CustomizedBGift;
