import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import LoyalityCard from "./LoyalityCard";
const PointPreview = () => {
  const [openSuccess, setSuccess] = useState(false);
  return (
    <div>
      <p className="loyalty-form-header">Spent My Points (Preview )</p>
      <div className="loyalty-form-container h-[350px] flex justify-center items-center flex-col gap-6">
        <LoyalityCard
          image="../../Frame 38308 (2).png"
          text="Chocolate"
        />
        <button className="loyalty-button1" onClick={() => setSuccess(true)}>
        Add to Spend My Point
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert2">
          <img src="../../Vector (2).png" alt="" />
          <span>
             Successfully 'Product added to Spend my Points'
          </span>
        </div>
      </DialogDefault>
    </div>
  );
};

export default PointPreview;
