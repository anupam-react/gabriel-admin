import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate } from "react-router-dom";

const BirthdayGiftPreview = ({ handleOpen }) => {
  const navigate = useNavigate()

  const [openSuccess, setSuccess] = useState(false);
  const data = [
    
    {
      title: "Decription",
      value: "70% discount Birthday special",
     
    },
    {
      title: "Birthday Message",
      value: "Happy Birthday !!",
     
    },
   
  ];
  return (
    <div className="gift-container">
      <div className="gift-main" >
        <p className="title">Birthday Gift ( Preview )</p>
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
      <div className="flex flex-col items-center gap-4">
      <div className="cardContainer" >
        <img src="image 710.jpg" alt="" />
        <p>70% Birthday Special Discount</p>
      </div>
      <div >
        {data?.map((d, i) => (
          <div className="" key={i}>
           
              <p className="text-[#12121280] pb-3 text-[20px] font-[600]">{d?.value}</p>
           
          </div>
        ))}
          </div>
           <button className="menuButton4" onClick={()=>{ 
            setSuccess(true)
            setTimeout(()=>{
              setSuccess(false)
              // navigate('/')
            },2000)
            }}>Send to Customer Gift folder</button>

      </div>
         
           <DialogDefault open={openSuccess} handleOpen={setSuccess}>
              <div className="alert">
                  <img src="./Vector (2).png" alt="" />
                  <p className="text-[32px] font-bold text-center">Successfully Sent to customer’s Gift Folder</p>

            </div>
        </DialogDefault>
    </div>
  );
};

export default BirthdayGiftPreview;
