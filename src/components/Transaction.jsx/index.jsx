import React, { useState } from "react";
import "./index.css";
import TransactionCard from "./TransactionCard";
import SellingCard from "./SellingCard";
import { BarChart } from "./BarChart";
import Select from "../common/Select";
import LoyalityCard from "./LoyalityCard";
import { LineChart } from "./LineChart";
import ReportPage from "./ReportPage";
const Transaction = () => {
  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
  const transactionData = [
    {
      title: "TOTAL SALES VOLUME",
      image: "./image 50.png",
      amount: 5000,
      footerTitle: "TOTAL SALES PROCESSED",
    },
    {
      title: "TRANSACTION COUNT",
      image: "./image 51.png",
      amount: 5000,
      footerTitle: "INDIVIDUAL TRANSACTION PROCESSED",
    },
    {
      title: "AVERAGE TRANSACTION VALUE",
      image: "./image 52.png",
      amount: 5000,
      footerTitle: "SPENT PER TRANSACTION",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Transaction Data</p>
        <img
          src="./Mask group (6).svg"
          alt=""
          className="h-8 w-8 cursor-pointer"
        />
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFF",
            width: "25rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-80 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search in Transaction Data"
          />
        </div>
        <div className="flex">
          <button className="export flex gap-2" onClick={()=> setOpen(true)}>
            <img src="./Mask group (7).svg" alt="" className="w-5 h-5" />
            <p>REPORT</p>
          </button>
        </div>
      </div>
      <div className="flex justify-between my-6">
        {transactionData?.map((data, i) => (
          <TransactionCard data={data} />
        ))}
      </div>
      <div className="flex gap-4">
        <SellingCard />
        <div className="shadow-xl rounded-md bg-white flex flex-col items-center gap-3 py-4 px-4 flex-1">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#0070BC] font-semibold text-lg ">
              TIME BASED ANALYTICS
            </p>
            <Select />
          </div>
          <div className="w-[650px] h-[350px]">
            <BarChart />
          </div>
        </div>
      </div>
      <div className="flex gap-4  mt-4">
        <LoyalityCard />
        <div className="shadow-xl rounded-md bg-white flex flex-col items-center gap-3 py-4 px-4 flex-1">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#0070BC] font-semibold text-lg ">
              CUSTOMER LOYALTY METRICS
            </p>
            <Select />
          </div>
          <div className="w-[650px] h-[350px]">
            <LineChart />
          </div>
        </div>
      </div>
      {/* <ReportPage open={open} setOpen={setOpen} handleOpen={handleOpen} /> */}
    </div>
  );
};

export default Transaction;
