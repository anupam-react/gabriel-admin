import React from "react";
import { useNavigate } from "react-router-dom";

const MarketingReviewCampaign = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/marketing/ad-preview");
  };

  const data1 = [
    {
      title: "Campaign Type",
      value: "Percentage DIscount",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Discount Value",
      value: "50% discount coupon on all hot drinks",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Expriy Date",
      value: "25-jan-2024",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Add Conditions",
      value: "Select specific product attached to Coupon ( Burger)",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "No of Points Reward",
      value: "500 POints",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Add Conditions",
      value: "Select specific product attached to Coupon ( Burger)",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
  ];
  const data2 = [
    {
      title: "Target Location",
      value: "4517 Washington Ave. Manchester, Kentucky 39495",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Estimated  Reach",
      value: "5000 Cutomers",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Review Campaign</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Ad Review</p>
          <div className="">
            <img src="../Group 38237.png" alt="" />
          </div>
        </div>
        <div className="footer-Main2">
          {data1?.map((d, i) => (
            <div className="footer-container2">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2">Edit</button>
            </div>
          ))}
          <div className="footer-container2">
            <p>Customer</p>
            <span>:</span>
            <p className="flex items-center gap-3">
              Active
              <span className="live-dots"></span>
            </p>
            <button className="edit-button2">Edit</button>
          </div>
          {data2?.map((d, i) => (
            <div className="footer-container2">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2">Edit</button>
            </div>
          ))}
        </div>
        <button
          className="loyalty-button1"
          style={{ width: "300px" }}
          onClick={handleSubmit}
        >
          See Campaign Review
        </button>
      </div>
    </div>
  );
};

export default MarketingReviewCampaign;
