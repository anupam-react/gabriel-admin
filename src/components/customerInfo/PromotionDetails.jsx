import React from "react";
import "./index.scss";
const PromotionDetails = ({ image, type, name, handleOpen }) => {
  return (
    <div className="details-container">
      <p className="details-title">Promotion Details</p>
      <img
        src="./Mask group (2).png"
        alt=""
        className="cross-image2"
        onClick={() => handleOpen(false)}
      />
      <img src={image} alt="" className="details-image" />
      <div className="details-info2">
        <div className="info2">
          <p>Product</p>
          <p>{name}</p>
        </div>
        <div className="info2">
          <p>Promotion Type and Value ID</p>
          <p> {type}</p>
        </div>
        <div className="info2">
          <p>Date</p>
          <p>05/12/2023</p>
        </div>
        <div className="info2">
          <p>Promotion Time</p>
          <p className="text-right">11:05 pm </p>
        </div>
        <div className="info2">
          <p>Expiry</p>
          <p>05/12/2023,12:00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default PromotionDetails;
