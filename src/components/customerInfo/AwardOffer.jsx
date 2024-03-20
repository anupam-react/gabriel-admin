import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import AwardCustomer from "./AwardCustomer";
import "./index.scss";
const AwardOffer = ({handleOpen}) => {
  const [openCustom, setOpenCustom] = useState(false);
  const [openSuccess, setSuccess] = useState(false);
  const data = [
    {
      title: "Campaign Type",
      value: "Percentage DIscount",
      handleCLick: () => {
        setOpenCustom(true);
      },
    },
    {
      title: "Decription",
      value: "70% discount Birthday special",
      handleCLick: () => {
        setOpenCustom(true);
      },
    },
    {
      title: "Reward Type",
      value: "Points",
      handleCLick: () => {
        setOpenCustom(true);
      },
    },
    {
      title: "Reward Value",
      value: "70%",
      handleCLick: () => {
        setOpenCustom(true);
      },
    },
  ];
  return (
    <div className="gift-container">
      <div className="gift-main">
        <p className="title">Birthday Offer ( Preview )</p>
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
      <div className="cardContainer">
        <img src="image 710.jpg" alt="" />
        <p>70% Birthday Special Discount</p>
      </div>
      <div className="footer-Main">
        {data?.map((d, i) => (
          <div className="footer-container">
            <p>{d?.title}</p>
            <p>:</p>
            <p>{d?.value}</p>
            <button className="edit-button" onClick={d?.handleCLick}>Edit</button>
          </div>
        ))}
      </div>
      <button className="menuButton" onClick={() => setSuccess(true)}>
        Send to Customer Offer folder
      </button>
      <DialogDefault open={openCustom} handleOpen={setOpenCustom}>
        <AwardCustomer handleOpen={setOpenCustom} />
      </DialogDefault>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert">
          <img src="./Vector (2).png" alt="" />
          <p>Successfully !!!! Sent to customer offer folder</p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default AwardOffer;
