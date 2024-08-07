import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import useOffer from "../../hooks/useOffer";
import { formatDate3 } from "../../utiils";
const PromotionPreview = ({handleOpen, isPay = false }) => {
  const navigate = useNavigate();
  const [openSuccess, setSuccess] = useState(false);
  const {
    offerData,
  } = useOffer();
  return (
    <div className="gift-container no-scrollbar">
        <div className="gift-main">
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
   
      <div className="ad-container">
       
      <div className="flex flex-col gap-3 items-center">
        <p className="text-[#121212] text-[20px] font-semibold">Percentage Discount</p>
      
      <div className="cardContainer">
      <img src={offerData?.image} alt="" className="h-[100px] w-[150px]"/>
      <p>{offerData?.description}</p>
      </div>
      <div className="flex gap-6 items-center">
        <p className="text-[#0070BC]">Exp : {formatDate3(offerData?.expireDate)}</p>
      <div>
              <div className="flex justify-end gap-2">
                <img src="../mdi_gift.png" alt="" />
                <p className="font-semibold"> : {offerData?.rewardPoints}</p>
                <img src="../image 698 (3).png" alt="" />
              </div>
            </div>
      </div>
        
            <button
              className="loyalty-button1 mt-6"
              style={{ width: "fit-content" , width:"300px" }}
              onClick={()=>{
                isPay ? navigate("/customer/payment/customer") :  setSuccess(true)
              }}
            >
              {isPay ? "Pay £1" : "Send to Customer’s Offer Folder"}
            </button>
   
        </div>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <PromotionPreview isPay={true} handleOpen={setSuccess} />
      </DialogDefault>
    </div>
  );
};

export default PromotionPreview;
