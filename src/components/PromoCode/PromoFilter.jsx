import React, { useState } from "react";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { DatePickerComp2 } from "../customerInfo/DatePickerComp2";
import { Slider } from "@material-tailwind/react";
import SelectRetailer from "./SelectRetailer";
import SelectItem from "./SelectItem";
// import AddProfile from "./AddProfile";
const PromoFilter = ({ closeDrawer, open }) => {
  const [openRetailer, setOpenRetailer] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        direction="right"
        className="bla bla bla"
        size={400}
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
              <h5 className="text-xl font-semibold">Filter</h5>
              <div onClick={closeDrawer}>
                <img
                  src="./close-outline 1.svg"
                  alt=""
                  className="w-10 cursor-pointer"
                />
              </div>
            </div>
            <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
            <div className="p-2">
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Date Range</p>
                <select
                  id="countries"
                  // value={selectedOption}
                  // onChange={handleChange}
                  className="input-loyalty"
                >
                  <option className="font-semibold" value="custom">
                    WEEKLY
                  </option>
                  <option className="font-semibold" value="custom">
                    MONTHLY
                  </option>
                  <option className="font-semibold" value="custom">
                    YEARLY
                  </option>
                  <option className="font-semibold" value="custom">
                    CUSTOM
                  </option>
                </select>
              </div>
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

              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Amount</p>
                <div class="relative mb-10">
                  <label for="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  {/* <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
                  <Slider color="blue" defaultValue={50} />
                  <span className="text-sm text-black dark:text-gray-400 absolute start-0 -bottom-8">
                    0
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £100
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £500
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-8">
                    £1,000
                  </span>
                  <span className="text-sm text-black dark:text-gray-400 absolute end-0 -bottom-8">
                    £5,000
                  </span>
                </div>
              </div>
              <div className="calender" style={{ marginTop: "60px" }}>
                <div>
                  <p>Min.</p>
                  <DatePickerComp2 />
                </div>
                <div>
                  <p>Max.</p>
                  <DatePickerComp2 />
                </div>
              </div>
              <div className="mt-10">
                <p className="text-lg font-semibold pb-4">Retailer & Item</p>
                <select
                  id="countries"
                  onClick={() => {
                    setOpenRetailer(!openRetailer);
                  }}
                  className="rounded shadow-md mb-4 cursor-pointer bg-[#EEEEEE80] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option className="font-semibold text-[#000000B2]">
                    Select Retailer
                  </option>
                </select>
                <select
                  id="countries"
                  onClick={() => {
                    setOpenItem(!openItem);
                  }}
                  className="rounded shadow-md cursor-pointer  bg-[#EEEEEE80] text-sm  border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option className="font-semibold text-[#000000B2]">
                    Select Item
                  </option>
                </select>
                {openRetailer && <SelectRetailer />}
                {openItem && <SelectItem />}
              </div>
              {/* <div
                className="mt-6 cursor-pointer flex justify-center items-center gap-3 rounded-lg py-2 border border-[#0070BC] text-[#0070BC]"
                // onClick={() => setOpenProfile(!openProfile)}
              >
                <img src="./Mask group (10).png" alt="" className="w-7 h-7" />
                <p className="font-semibold text-lg">ADD</p>
              </div> */}

              {/* {openProfile && <AddProfile />} */}
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
              onClick={closeDrawer}
            >
              RESET
            </button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default PromoFilter;
