import React from "react";
import { Drawer, Typography } from "@material-tailwind/react";
import { DatePickerComp2 } from "./DatePickerComp2";
import "./index.scss";
const Filter = ({ closeDrawer, open }) => {
  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="drawer"
          >
              <div className="filterContainer">
              <div className="filter-body">
        <div className="mb-6 flex items-center justify-between">
          <div onClick={closeDrawer}>
            <img
              src="./Mask group (2).png"
              alt=""
              className="w-10 cursor-pointer"
            />
          </div>
          <Typography variant="h5" color="blue-gray">
            Filter
          </Typography>
          <div onClick={closeDrawer}>
            <img
              src="./close-outline 1.svg"
              alt=""
              className="w-10 cursor-pointer"
            />
          </div>
        </div>
        <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
        <p className="joint-date">Date Joined</p>
        <select
          id="countries"
          // value={selectedOption}
          // onChange={handleChange}
          className="rounded shadow-md text-gray-900 text-sm  border-none block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option className="font-semibold" value="custom">
            CUSTOM
          </option>
        </select>
        <div className="calender">
          <div>
            <p>From</p>
            <DatePickerComp2 />
          </div>
          <div>
            <p>To</p>
            <DatePickerComp2 />
          </div>
        </div>
        <p className="joint-date">Referral Source</p>
        <div className="checkbox-container">
          <div className="checkbox-filter">
            <label className="checkbox1 text1 ">
              Marketing Campaign
              <input
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="checkbox-filter">
            <label className="checkbox1 text1 ">
              Organic Means
              <input
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="checkbox-filter">
            <label className="checkbox1 text1 ">
              Refer & Earn
              <input
                type="checkbox"
                // checked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        </div>
        <div className="button-container">
          <button
            className="button2"
            //   onClick={() => {
            //     setOpenAlert(true);
            //   }}
          >
            APPLY
          </button>
          <button
            className="button4"
            //   onClick={() => {
            //     setOpenAlert(true);
            //   }}
          >
            RESET
          </button>
        </div>
                  
              </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Filter;
