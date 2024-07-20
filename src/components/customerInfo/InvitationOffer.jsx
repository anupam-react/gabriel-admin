import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import useReferral from "../../hooks/useReferral";
import { formatDate3 } from "../../utiils";


const InvitationOffer = ({ handleOpen }) => {
  const {
    referralData,
  } = useReferral()
  const [openSuccess, setSuccess] = useState(false);
 
  return (
    <div className="gift-container no-scrollbar">
      <div className="gift-main" >
        <p className="title">Invitation Link</p>
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
      <div className="flex flex-col justify-center items-center gap-4">
      <div className="cardContainer2 px-8 py-4" >
      <img src={referralData?.image} alt="" className="h-[100px] w-[150px]"/>
      <p className="text-center">{referralData?.description}</p>
      </div>
      <div >
      
          <div className="">
           
              <p className="pb-3 text-[20px] font-[600] w-[300px]">{referralData?.message}</p>
              <p className="pb-3 text-[20px] font-[600] w-[300px]">{referralData?.exclusiveLink}
                </p>
              <p className="pb-3 text-[20px] font-[600] text-[#0070BC] w-[300px]">Exp : {formatDate3(referralData?.expireDate)}</p>
           
          </div>

          </div>
           <button className="menuButton4" onClick={()=>{
             setSuccess(true)
             setTimeout(()=>{
              setSuccess(false)
             },2000)
             }}>Send to Customer’s Offer Folder</button>

      </div>
         
           <DialogDefault open={openSuccess} handleOpen={setSuccess}>
           <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">
          Successfully Sent to customer’s Offer Folder
          </p>
        </div>
        </DialogDefault>
    </div>
  );
};

export default InvitationOffer;
