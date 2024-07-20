import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import InvitationOffer from "./InvitationOffer";
import useReferral from "../../hooks/useReferral";
import { formatDate3 } from "../../utiils";

const InvitationPreview = ({ handleOpen }) => {
  const {
    referralData,
  } = useReferral()
  const [openSuccess, setSuccess] = useState(false);

  return (
    <div className="gift-container no-scrollbar">
    <div className="gift-main">
      <p className="title">
      Invitation Link
      </p>
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
    <img src={referralData?.image} alt="" className="h-[100px] w-[150px]"/>
    <p className="text-center">{referralData?.description}</p>
    </div>
    <div className="footer-Main">
        <div className="footer-container">
          <p style={{width:"fit-content"}}>Custom Message</p>
          <p>:</p>
          <p style={{width:"200px"}}>{referralData?.message}</p>
          <button
            className="edit-button"
            onClick={() => {
              handleOpen(false);
            }}
          >
            Edit
          </button>
        </div>
        <div className="footer-container">
          <p style={{width:"fit-content"}}>Exclusive Link</p>
          <p>:</p>
          <p style={{width:"200px", color:"#0070BC"}}>http://
            {referralData?.exclusiveLink}</p>
          <button
            className="edit-button"
            onClick={() => {
              handleOpen(false);
            }}
          >
            Edit
          </button>
        </div>
        <div className="footer-container">
          <p style={{width:"fit-content"}}>Expiration Date</p>
          <p>:</p>
          <p style={{width:"200px"}}>{formatDate3(referralData?.expireDate)}</p>
          <button
            className="edit-button"
            onClick={() => {
              handleOpen(false);
            }}
          >
            Edit
          </button>
        </div>
    </div>
    <button className="menuButton" onClick={() => setSuccess(true)}>
    See Invitation Preview
    </button>

    <DialogDefault open={openSuccess} handleOpen={setSuccess}>
      <InvitationOffer handleOpen={setSuccess}/>
    </DialogDefault>
  </div>
  );
};

export default InvitationPreview;
