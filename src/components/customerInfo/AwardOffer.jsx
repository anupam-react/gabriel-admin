import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import AwardCustomer from "./AwardCustomer";
import "./index.scss";
import PromotionPreview from "./PromotionPreview";
import useOffer from "../../hooks/useOffer";
const AwardOffer = ({handleOpen}) => {
  const [openCustom, setOpenCustom] = useState(false);
  const [openSuccess, setSuccess] = useState(false);
  const {
    offerData,
  } = useOffer();
  const data = [
    {
      title: "Promotion Type",
      value: "Percentage DIscount",
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Decription",
      value: offerData?.description,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Reward Type",
      value: offerData?.typeOfReward,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Reward Value",
      value: offerData?.rewardPoints,
      handleCLick: () => {
         handleOpen(false);
      },
    },
    {
      title: "Expiration Date",
      value:  offerData?.expireDate,
      handleCLick: () => {
         handleOpen(false);
      },
    },
  ];
  return (
    <div className="gift-container no-scrollbar">
      <div className="gift-main ">
        <p className="title">Send Target Promotons</p>
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
      <img src={offerData?.image} alt="" className="h-[100px] w-[150px]"/>
      <p>{offerData?.description}</p>
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
      See Promotion Preview
      </button>
      <DialogDefault open={openCustom} handleOpen={setOpenCustom}>
        <AwardCustomer handleOpen={setOpenCustom} id={data?._id}/>
      </DialogDefault>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <PromotionPreview  handleOpen={setSuccess}/>
      </DialogDefault>
    </div>
  );
};

export default AwardOffer;
