import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const ReportSetting = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const MonthOptions = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
    { label: "Half-Yearly", value: "half-yearly" },
    { label: "Yearly", value: "yearly" },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-[#0070BC] font-semibold">
        <span className="cursor-pointer" onClick={() => navigate("/setting")}>
          Settings {">"}{" "}
        </span>
        <span className="text-[#000000] text-lg">Report Settings</span>{" "}
      </p>
      <div className="notificationConatiner">
        <p className="text-[#0070BC] font-semibold">MANUAL REPORT GENERATION</p>
        <div>
          <p className="text-[#000000B2] pb-4">Export Location</p>
          <div className="flex justify-between items-center px-6 h-12 input-loyalty">
            <div className="flex gap-6">
              <img src="../image 73.png" alt="search" className="w-6 h-6" />
              <p>Windows \ D: \My Files \ My Folder \</p>
            </div>
            <label
              for="fileUpload"
              className="flex gap-4 items-center cursor-pointer"
            >
              <img
                src="../Mask group (16).png"
                alt="search"
                className="w-6 h-6"
              />
              <p className="text-[#FEA82F] font-bold">CHANGE</p>
            </label>
            <input type="file" id="fileUpload" className="hidden" />
          </div>
        </div>
        <div>
          <p className="text-[#0070BC] font-semibold pb-3">
            AUTOMATIC REPORT GENERATION
          </p>
          <p className="pb-5">
            Change & Manage your scheduling for Automatic Report Generation
          </p>
          <div className="mb-6">
            <p className="text-[#000000B2] pb-3 font-semibold">
              Automatic Reports Schedule
            </p>
            <select
              id="countries"
              value={selectedOption}
              onChange={handleChange}
              className="rounded shadow-md text-gray-900 text-sm  border-none block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {MonthOptions?.map((data, i) => (
                <>
                  <option className="font-semibold" key={i} value={data?.value}>
                    {data?.label}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div>
            <p className="text-[#000000B2] pb-3 font-semibold">
              Send Reports to :
            </p>
            <div
              className="flex items-center px-6 h-12 input-loyalty"
              style={{ background: "#EEEEEE80", width: "400px" }}
            >
              <img src="../image 2 (3).svg" alt="search" className="w-6 h-6" />
              <input type="text" className="search" placeholder="Search" />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="report-profile" style={{ width: "200px" }}>
              <img src="../Ellipse 11.png" alt="search" className="w-7 h-7" />
              <p>Lorem Ipsum</p>
              <img
                src="../Mask group (14).png"
                alt="search"
                className="w-5 h-5"
              />
            </div>
            <div className="report-profile" style={{ width: "200px" }}>
              <img src="../Ellipse 11.png" alt="search" className="w-7 h-7" />
              <p>Lorem Ipsum</p>
              <img
                src="../Mask group (14).png"
                alt="search"
                className="w-5 h-5"
              />
            </div>
            <div className="report-profile" style={{ width: "200px" }}>
              <img src="../Ellipse 11.png" alt="search" className="w-7 h-7" />
              <p>Lorem Ipsum</p>
              <img
                src="../Mask group (14).png"
                alt="search"
                className="w-5 h-5"
              />
            </div>
            <div className="report-profile" style={{ width: "200px" }}>
              <img src="../Ellipse 11.png" alt="search" className="w-7 h-7" />
              <p>Lorem Ipsum</p>
              <img
                src="../Mask group (14).png"
                alt="search"
                className="w-5 h-5"
              />
            </div>
            <div className="report-profile" style={{ width: "200px" }}>
              <img src="../Ellipse 11.png" alt="search" className="w-7 h-7" />
              <p>Lorem Ipsum</p>
              <img
                src="../Mask group (14).png"
                alt="search"
                className="w-5 h-5"
              />
            </div>
            <div className="report-profile" style={{ width: "200px" }}>
              <img src="../Ellipse 11.png" alt="search" className="w-7 h-7" />
              <p>Lorem Ipsum</p>
              <img
                src="../Mask group (14).png"
                alt="search"
                className="w-5 h-5"
              />
            </div>
            <div className="report-profile" style={{ width: "200px" }}>
              <img src="../Ellipse 11.png" alt="search" className="w-7 h-7" />
              <p>Lorem Ipsum</p>
              <img
                src="../Mask group (14).png"
                alt="search"
                className="w-5 h-5"
              />
            </div>
            <div className="flex items-center gap-4">
              <img src="../Mask group (15).png" alt="" className="w-6 h-6" />
              <p className="text-[#0070BC] font-semibold">ADD</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-black">Add Trigers</p>
          <p className="text-[#000000B2] py-4">
            Add triggers to notify & automatically send the report whenever
            following conditions are met
          </p>
          <div className="flex flex-col gap-6 mb-4">
            <div className="flex items-start gap-6">
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-black dark:text-gray-300 ">
                Maximum Number Of Transaction Crossed
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    value="Add Value ( e.g 1,00,000 )"
                    className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-black dark:text-gray-300">
                  Maximum Transaction Value Crossed
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    value="Add Value ( e.g 1,00,000 )"
                    className="rounded shadow-md text-[#000000B2] text-sm  border-none block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSetting;
