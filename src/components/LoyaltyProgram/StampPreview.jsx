import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import LoyalityCard from "./LoyalityCard";
const StampPreview = () => {
  const [openSuccess, setSuccess] = useState(false);
  return (
    <div>
      <p className="loyalty-form-header">Stamp System Preview</p>
      <div className="loyalty-form-container h-[350px] flex justify-center items-center flex-col gap-6">
        <LoyalityCard
          image="../../Frame 38302.png"
          text="Buy 9 Hot Drinks , Get 1 Free"
        />
        <button className="loyalty-button1" onClick={() => setSuccess(true)}>
          See Stamp System Preview
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert2">
          <img src="../../Vector (2).png" alt="" />
          <span>
           Stamp System is now attached to your products. Your customers can now pay and earn Stamps.
          </span>
        </div>
      </DialogDefault>
    </div>
  );
};

export default StampPreview;
