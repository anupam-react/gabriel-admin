import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import useStamp from "../../hooks/useStamp";

const StampSystemForm = () => {
  const {
    description,
    setDescription,
    setTotalNoOfStamps,
    setCategoryId,
    setSubCategoryId,
    category,
    subcategory,
    selectedCat,
    handleCategory,
    handleStamp,
  } = useStamp();
  const navigate = useNavigate();
  const [selectedSubCat, setSubCat] = useState(null);
  const [noOfStamp, setNoOfStamp] = useState(null);

  const stampOptions = [
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
   
  ];

  return (
    <div>
      <p className="loyalty-form-header">
        Attach Stamp System to your products
         
      </p>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product Category</p>
          <Select
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedCat}
            options={category?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={category?.[0]?._id}
            onChange={handleCategory}
            placeholder=""
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Choose Product sub-category
          </p>
          <Select
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={selectedSubCat}
            options={subcategory?.map((user) => ({
              value: user._id,
              label: user?.name,
            }))}
            defaultValue={subcategory?.[0]?._id}
            onChange={(e) => {
              setSubCat(e);
              setSubCategoryId(e.value);
            }}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Total No. of stamps to collect before reward
          </p>
          <Select
            className="input-loyalty2"
            styles={{ width: "20px" }}
            value={noOfStamp}
            options={stampOptions}
            defaultValue={stampOptions?.[0]?.value}
            onChange={(e) => {
              setNoOfStamp(e);
              setTotalNoOfStamps(e.value);
            }}
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() =>  navigate("/loyalty")}>
            Back
          </button>
          <button
            className="loyalty-button1"
            onClick={handleStamp}
          >
          See Stamp System review
          </button>
        </div>
      </div>
    </div>
  );
};

export default StampSystemForm;
