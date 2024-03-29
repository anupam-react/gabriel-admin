import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import LoyalityCard from "./LoyalityCard";
const SavingPreview = () => {
  const [openSuccess, setSuccess] = useState(false);
  return (
    <div>
      <p className="loyalty-form-header">Make a Saving Preview</p>
      <div className="loyalty-form-container h-[350px] flex justify-center items-center flex-col gap-6">
        <LoyalityCard
          image="../../Frame 38308 (3).png"
          text="Get 12 for the price of 9 donuts for £15 "
        />
        <button className="loyalty-button1" onClick={() => setSuccess(true)}>
         Add to Make a Saving
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert2">
          <img src="../../Vector (2).png" alt="" />
          <span>
            Successfully 'Product added to Make a Saving'
          </span>
        </div>
      </DialogDefault>
    </div>
  );
};

export default SavingPreview;
