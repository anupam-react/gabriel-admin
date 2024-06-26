import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const PointForm = ({ isReview = false }) => {
  const navigate = useNavigate();
  return (
    <div>
          <p className="loyalty-form-header">{!isReview ? "Spent My Points" : "Spent My Points (Review )"}</p>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload product photo</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Name</p>
          <input
            type="text"
            className="input-loyalty2"
            value="Fruit"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            value="Get a free Fruit at Taste Imperial for just 840points. Hit ‘buy’ now to generate a voucher onyour wallet.This offer includes one of the following: Banana,Orange, Pear and apple."
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">No. of points</p>
          <input type="text" className="input-loyalty2" value="840" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose outlet</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              All Outlets
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">T&Cs</p>
          <input
            type="text"
            className="input-loyalty2"
            value="Subject to availability"
          />
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              !isReview
                ? navigate("/loyalty")
                : navigate("/loyalty/point");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            onClick={() => {
              !isReview
                ? navigate("/loyalty/point/review")
                : navigate("/loyalty/point/preview");
            }}
          >
            {!isReview ? "See Spend My Points Review" : "See Spend My Points Preview"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PointForm;
