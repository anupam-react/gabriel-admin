import React, { useState } from "react";
import "./index.scss";
import CatalogueProduct from "./CatalogueProduct";
import { DialogDefault } from "../common/DilogBox";
import BirthdayOffer from "./BirthdayOffer";
const CustomizedBGift = ({ handleOpen }) => { 
  const [openOffer, setOffer] = useState(false);
  const [openUploadImage, setUploadImage] = useState(false);

  return (
    <div className="gift-container  no-scrollbar">
      <div className="gift-main">
        <p className="title">Send Customized Birthday Offer</p>
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
      <div className="catalogue">
        <label>Select Product from catalogue</label>
        <CatalogueProduct />
      </div>
      <div className="form-container">
      <div className="input-container">
          <label>Upload photo/product</label>
         <div className="flex  w-full">
             <label
               for="dropzone-file"
               className="flex justify-end bg-white  shadow rounded-md w-full "
             >
               <div
                 className="flex py-2 px-4 rounded-md text-white gap-2 cursor-pointer"
                 style={{ backgroundColor: "#00AAEA" }}
                 onClick={()=>setUploadImage(true)}
               >
                 <p className="text-sm">UPLOAD</p>
               </div>
               {/* <input id="dropzone-file" type="file" className="hidden" /> */}
             </label>
           </div>
           </div>
   
       
        <div className="input-container">
          <label>Promotion Description text</label>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            className="input"
          />
        </div>

    
        <div className="input-container">
          <label>Enter Birthday Meassage!</label>
          <input
            type="text"
            name=""
            id=""
            className="input"
            placeholder="Happy Birthday !!"
          />
        </div>
  
      </div>
      <div className="flex-center">
        <button
          className="menuButton"
          onClick={() => {
            setOffer(true);
          }}
        >
          Save & Next
        </button>
      </div>
      
      <DialogDefault open={openOffer} handleOpen={setOffer}>
  <BirthdayOffer handleOpen={setOffer} isOffer={true}/>
    </DialogDefault>
    <DialogDefault open={openUploadImage} handleOpen={setUploadImage}>
        <div className="p-6">
            <div className="flex justify-center items-center">
                <img src="../Vector (40).png" alt="" className="cursor-pointer" onClick={()=>setUploadImage(false)}/>
            </div>
            <div className="flex justify-around mt-4">
            <div className="flex gap-2 cursor-pointer"  onClick={()=>setUploadImage(false)}>
                <img src="../Vector (41).png" alt="" />
                <p className="underline text-black font-[500]">Browse Image</p>
            </div>
            <div className="flex gap-2 cursor-pointer"  onClick={()=>setUploadImage(false)}>
                <img src="../solar_gallery-bold.png" alt="" />
                <p className="underline text-black font-[500]">Open Gallery</p>
            </div>

            </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default CustomizedBGift;
