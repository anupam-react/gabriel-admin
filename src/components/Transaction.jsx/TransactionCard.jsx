import React from "react";
import Select from "../common/Select";

const TransactionCard = ({ data }) => {
  return (
    <div className="shadow-xl rounded-lg bg-white flex flex-col items-center gap-3 py-6 px-4 w-[24vw]">
      <p className="text-[#0070BC] text-[20px] font-semibold">{data?.title}</p>
      <div className="mb-3">
        <Select />
      </div>
      <div className="flex items-center gap-4">
        <img src={data?.image} alt="" />
        <p className="text-[38px] font-bold">{data?.amount}</p>
      </div>
      <p className="text-[#1E1E1E99] font-semibold text-center">
        {data?.footerTitle}
      </p>
    </div>
  );
};

export default TransactionCard;
