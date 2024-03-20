import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import "./index.scss";
const Bouns = ({ handleOpen }) => {
  const [openSuccess, setSuccess] = useState(false);
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Award Free Bonus</p>
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
      <div className="button-group">
        <button className="button1" onClick={() => setSuccess(true)}>
          50 Points
        </button>
        <button className="button2" onClick={() => setSuccess(true)}>
          200 Points
        </button>
        <button className="button1" onClick={() => setSuccess(true)}>
          300 Points
        </button>
      </div>
      <div className="form-container">
        <div className="input-container">
          <label>Custom Points</label>
          <input type="text" name="" id="" className="input" placeholder="" value="1000 Points"/>
        </div>

        <div className="input-container">
          <label>Description</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="3"
            cols="50"
                      className="input"
                      value="Enter Customer Message Congratulations! You have been awarded #PointsNumber bonus points on your last #ProductName purchase"
          />
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
         Your customize free award bonus has been sent to
Customer ID :  #98BB212
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default Bouns;
