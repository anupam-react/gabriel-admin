import React from "react";
import "./index.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const LoyaltyFilter = ({ closeDrawer, open }) => {
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        direction="right"
        className="bla bla bla"
        size={350}
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
                <p className="text-lg font-semibold pb-4">Item Bought</p>
                <select
                  id="countries"
                  // value={selectedOption}
                  // onChange={handleChange}
                  className="input-loyalty"
                >
                  <option className="font-semibold" value="custom">
                    COFFEE
                  </option>
                </select>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Points Earned</p>
                <input type="text" className="input-loyalty" value="300" />
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Date Range</p>
                <select
                  id="countries"
                  // value={selectedOption}
                  // onChange={handleChange}
                  className="input-loyalty"
                >
                  <option className="font-semibold" value="custom">
                    INSTORE
                  </option>
                </select>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Type of Earned</p>
                <select
                  id="countries"
                  // value={selectedOption}
                  // onChange={handleChange}
                  className="input-loyalty"
                >
                  <option className="font-semibold" value="custom">
                    TRANSACTION
                  </option>
                </select>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold pb-4">Sent to</p>
                <div className="flex items-center px-6 h-12 input-loyalty">
                  <img
                    src="./image 2 (3).svg"
                    alt="search"
                    className="w-6 h-6"
                  />
                  <input type="text" className="search" placeholder="Search" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center px-6 h-12 input-loyalty">
                  <div className="flex gap-6">
                    <img
                      src="./Ellipse 11.png"
                      alt="search"
                      className="w-6 h-6"
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <img src="./image 675.png" alt="search" className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-6 cursor-pointer flex justify-center items-center gap-3 rounded-lg py-2 border border-[#0070BC] text-[#0070BC]">
                <img src="./Mask group (10).png" alt="" className="w-7 h-7" />
                <p className="font-semibold text-lg">ADD</p>
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

export default LoyaltyFilter;
