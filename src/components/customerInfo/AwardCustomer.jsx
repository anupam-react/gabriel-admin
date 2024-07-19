import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import AwardOffer from "./AwardOffer";
import CatalogueProduct from "./CatalogueProduct";
import useOffer from "../../hooks/useOffer";
const AwardCustomer = ({
  handleOpen,
  id,
  title = "Send Target Promotions",
}) => {
  const {
    offerData,
    openOffer,
    setOpenOffer,
    handleChange,
    setProductId,
    setOfferData,
    handleCreatePromotion,
  } = useOffer();

  const promotionOptions = [
    { label: "Percentage Discount", value: "Discount" },
    { label: "Coupon", value: "Coupon" },
    { label: "Create an offer", value: "offer" },
    { label: "Buy 1 Get 1 Free", value: "Buy 1 Get 1 Free" },
  ];
  // const rewardOptions = [
  //   { label: "Points", value: "Points" },
  //   { label: "Stamps", value: "Stamps" },
  // ];
  return (
    <div className="gift-container no-scrollbar">
      <div className="gift-main ">
        <p className="title">{title}</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr" />
      <div className="form-container">
        <div className="input-container">
          <label>Choose Promotion Type</label>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {promotionOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-[#000000B2]"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="catalogue">
      <label>Select Product from catalogue</label>
      <CatalogueProduct setProductId={setProductId}/>
    </div>
        <div className="input-container">
          <label>Upload photo/product</label>
          <div className="flex  w-full">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
              {offerData?.image?.name}
              <div
                className="flex py-2 px-4 rounded-md text-white gap-2"
                style={{ backgroundColor: "#00AAEA" }}
              >
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden"  onChange={(e) =>setOfferData({ ...offerData, image: e.target.files[0] })}/>
            </label>
          </div>
        </div>
        <div className="input-container">
          <label>Promotion Description text</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="50"
            className="input"
            value={offerData?.description}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Choose Reward Type</label>
          <input type="text" className="input" name="typeOfReward"  value={offerData?.typeOfReward} onChange={handleChange}/>
          {/* <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="rounded shadow-md text-gray-900 text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {rewardOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-[#000000B2]"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select> */}
        </div>
        <div className="input-container">
          <label>Choose Reward Value</label>
          <input type="text" name="rewardPoints" id="" className="input" placeholder="" value={offerData?.rewardPoints} onChange={handleChange}/>
        </div>
        <div className="input-container">
          <label>Add Expiration Date</label>
          <input type="text" name="expireDate" id="" className="input" placeholder=""  value={offerData?.expireDate} onChange={handleChange}/>
        </div>
      </div>
      <div className="flex-center">
        <button className="menuButton" onClick={()=>handleCreatePromotion(id, "Reward")}>
          See Promotion Review
        </button>
      </div>
      <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
        <AwardOffer handleOpen={setOpenOffer} />
      </DialogDefault>
    </div>
  );
};

export default AwardCustomer;
