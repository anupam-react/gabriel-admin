import React, { useState } from "react";

import TransactionCard from "./TransactionCard";
import SellingCard from "./SellingCard";
import { BarChart } from "./BarChart";
import Select from "../common/Select";
import LoyalityCard from "./LoyalityCard";
import { LineChart } from "./LineChart";
import ReportPage from "./ReportPage";
import TransactionFilter from "./TransactionFilter";
import useTransaction from "../../hooks/useTransaction";

const Transaction = () => {
  const {     
    salesVolume,
    transactionCount,
    averageTransaction,
    topSellingItems,
    timeBaseAnalytics,
    getTransactionSaleVolume,
    getTransactionCount,
    getAverageTransactionValue,
    getTopSellingItems,
    getTimeBaseAnalytics } = useTransaction()

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeDrawer = () => setIsOpen(false);
  const handleOpen = () => setOpen(!open);

  console.log(  salesVolume,
    transactionCount,
    averageTransaction,
    topSellingItems,
    timeBaseAnalytics
  )


  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [openCustom1, setOpenCustom1] = useState(false);
  const [openCustom2, setOpenCustom2] = useState(false);
  const [openCustom3, setOpenCustom3] = useState(false);
  const [openCustom4, setOpenCustom4] = useState(false);
  const [openCustom5, setOpenCustom5] = useState(false);
  
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
    getTransactionSaleVolume(event.target.value)
    if (event.target.value === "custom") {
      setOpenCustom1(true);
    }
  };
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
    getTransactionCount(event.target.value)
    if (event.target.value === "custom") {
      setOpenCustom2(true);
    }
  };
  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value);
    getAverageTransactionValue(event.target.value)
    if (event.target.value === "custom") {
      setOpenCustom3(true);
    }
  };
  const handleChange4 = (event) => {
    setSelectedOption4(event.target.value);
    getTopSellingItems(event.target.value)
    if (event.target.value === "custom") {
      setOpenCustom4(true);
    }
  };
  const handleChange5 = (event) => {
    setSelectedOption5(event.target.value);
    getTimeBaseAnalytics(event.target.value)
    if (event.target.value === "custom") {
      setOpenCustom5(true);
    }
  };



  const transactionData = [
    {
      title: "TOTAL SALES VOLUME",
      image: "./image 50.png",
      amount: salesVolume,
      footerTitle: "TOTAL SALES PROCESSED",
      handleChange: handleChange1,
      selectedOption: selectedOption1,
      openCustom: openCustom1,
      setOpenCustom: setOpenCustom1
    },
    {
      title: "TRANSACTION COUNT",
      image: "./image 51.png",
      amount: transactionCount,
      footerTitle: "INDIVIDUAL TRANSACTION PROCESSED",
      handleChange: handleChange2,
      selectedOption: selectedOption2,
      openCustom: openCustom2,
      setOpenCustom: setOpenCustom2
    },
    {
      title: "AVERAGE TRANSACTION VALUE",
      image: "./image 52.png",
      amount: averageTransaction,
      footerTitle: "SPENT PER TRANSACTION",
      handleChange: handleChange3,
      selectedOption: selectedOption3,
      openCustom: openCustom3,
      setOpenCustom: setOpenCustom3
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Transaction Data</p>
        {/* <img
          src="./Mask group (6).svg"
          alt=""
          className="h-8 w-8 cursor-pointer"
        /> */}
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
          <button  onClick={() => setIsOpen(true)} className="flex items-center gap-2" >
            <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
            <p className="text-[#0070BC] font-semibold">FILTERS</p>
          </button>
        </div>
        <div className="flex">
          <button className="export flex gap-2" onClick={() => setOpen(true)}>
            <img src="./Mask group (7).svg" alt="" className="w-5 h-5" />
            <p>REPORT</p>
          </button>
        </div>
      </div>
      <div className="flex justify-between my-6">
        {transactionData?.map((data, i) => (
          <TransactionCard data={data} selectedOption={data?.selectedOption}  handleChange={data?.handleChange} open={data?.openCustom} setOpen={data?.setOpenCustom}/>
        ))}
      </div>
      <div className="flex gap-4">
        <SellingCard selectedOption={selectedOption4}  handleChange={handleChange4} open={openCustom4} setOpen={setOpenCustom4}/>
        <div className="shadow-xl rounded-md bg-white flex flex-col items-center gap-3 py-4 px-4 flex-1">
          <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#0070BC] font-semibold text-lg ">
            TIME BASED ANALYTICS
            </p>
            <Select selectedOption={selectedOption5}  handleChange={handleChange5} open={openCustom5} setOpen={setOpenCustom5}/>
          </div>
          </div>
          <div className="w-[650px] h-[350px]">
            <BarChart data={timeBaseAnalytics}/>
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
      {isOpen && <TransactionFilter closeDrawer={closeDrawer} open={isOpen} />}
      <ReportPage open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </div>
  );
};

export default Transaction;
