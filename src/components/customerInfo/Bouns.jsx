import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import "./index.scss";
import BounsPreview from "./BounsPreview";
import CatalogueProduct from "./CatalogueProduct";
import useBouns from "../../hooks/useBouns";
const Bouns = ({ handleOpen , id , onClose}) => {
  const { 
    bouns,
    handleChange,
    setBounData,
    openSuccess,
    setSuccess,
    handleCreateAwardFreeBonus,
    productId,
    setProductId,
  } = useBouns()

  const [activeOption , setActiveOption] = useState(0)
  const [activePoins , setActivePoints] = useState(0)
  const [activeStamps , setActiveStamps] = useState(0)

  return (
    <div className="gift-container  no-scrollbar">
      <div className="gift-main">
        <p className="title">Award Free Bonus</p>
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
      <div className="flex gap-3 items-center pb-2">
        <div className={activeOption === 0 ? "w-[20px] h-[20px] bg-[#00B050] rounded-full cursor-pointer" :"w-[20px] h-[20px] bg-[#8F8F8F] rounded-full cursor-pointer"} onClick={()=> {
          setActiveOption(0)
          setBounData({...bouns, totalNoOfStamps: 0})
          }}></div>
        <p className="text-[20px] font-[500] ">Reward Points</p>
      </div>
      <div className="button-group">
        <button className={activePoins === 0 ? "button2" :"button1"} onClick={()=>{
          setActivePoints(0)
          setBounData({...bouns, noOfPoint: 50})
        }}>50 Points</button>
        <button  className={activePoins === 1 ? "button2" :"button1"} onClick={()=>{
          setActivePoints(1)
          setBounData({...bouns, noOfPoint: 200})
        }}>200 Points</button>
        <button  className={activePoins === 2 ? "button2" :"button1"} onClick={()=>{
          setActivePoints(2)
          setBounData({...bouns, noOfPoint: 300})
        }}>300 Points</button>
      </div>
      <div className="form-container">
        <div className="input-container">
          <p className="text-[20px] font-[500]">Custom Points</p>
          <input
            type="text"
            name="noOfPoint"
            id=""
            className="input"
            placeholder=""
            disabled={activeOption === 1}
            value={bouns?.noOfPoint}
           onChange={handleChange} 
          />
        </div>
        <div className="flex gap-3 items-center">
          <div className={activeOption === 1 ? "w-[20px] h-[20px] bg-[#00B050] rounded-full cursor-pointer" :"w-[20px] h-[20px] bg-[#8F8F8F] rounded-full cursor-pointer"} onClick={()=> {
            setActiveOption(1)
            setBounData({...bouns, noOfPoint: 0})
            }}></div>
          <p className="text-[20px] font-[500]">Reward Stamps</p>
        </div>
        <div className="button-group">
          <button className={activeStamps === 0 ? "button2" :"button1"} onClick={()=>{
          setActiveStamps(0)
          setBounData({...bouns, totalNoOfStamps: 1})
        }}>1 Stamps</button>
          <button className={activeStamps === 1 ? "button2" :"button1"} onClick={()=>{
          setActiveStamps(1)
          
          setBounData({...bouns, totalNoOfStamps: 2})
        }}>2 Stamps</button>
          <button className={activeStamps === 2 ? "button2" :"button1"} onClick={()=>{
          setActiveStamps(2)
          setBounData({...bouns, totalNoOfStamps: 3})
        }}>3 Stamps</button>
        </div>
        <div className="catalogue">
          <label>Select Product from catalogue</label>
          <CatalogueProduct setProductId={setProductId}/>
        </div>
        <div className="input-container">
          <p className="text-[20px] font-[500]">Custom Stamps</p>
          <input
            type="text"
            name="totalNoOfStamps"
            id=""
            className="input"
            placeholder=""
            disabled={activeOption === 0}
            value={bouns?.totalNoOfStamps}
            onChange={handleChange} 
          />
        </div>
        <div className="input-container">
          <label className="text-[20px] font-[500]">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            cols="50"
            className="input"
            value={bouns?.description}
            onChange={handleChange} 
            // value="Enter Customer Message Congratulations! You have been awarded #PointsNumber bonus points on your last #ProductName purchase"
          />
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={() =>handleCreateAwardFreeBonus(id)}>
          See Award Free Bonus Preview
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <BounsPreview handleOpen={setSuccess} handleClose={onClose}/>
      </DialogDefault>
    </div>
  );
};

export default Bouns;
