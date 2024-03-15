import React from "react";
import Select from "../common/Select";

const TransactionCard = ({ data }) => {
  return (
    <div className="shadow-xl rounded-md bg-white flex flex-col items-center gap-3 py-4 px-4 w-[24vw]">
      <p className="text-[#0070BC] text-[20px] font-semibold">{data?.title}</p>
      <div className="">
        <Select />
      </div>
      <div className="flex items-center gap-2">
        <img src={data?.image} alt="" />
        <p className="text-4xl font-bold">{data?.amount}</p>
      </div>
      <p className="text-[#1E1E1E99] font-semibold text-center">
        {data?.footerTitle}
      </p>
    </div>
  );
};

export default TransactionCard;
