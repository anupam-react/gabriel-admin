import React from "react";

const TransactionCard = ({ data }) => {
  return (
    <div className="shadow-xl rounded-md bg-white flex flex-col items-center gap-3 py-4 px-4 w-[20vw]">
      <p className="text-[#0070BC] font-semibold">{data?.title}</p>
      <div className="">
        <select
          id="countries"
          className="rounded shadow-md text-gray-900 text-sm  border-none block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected disabled>
            THIS WEEK
          </option>
          {/* {subCategoryOptions?.map((data, i) => (
                  <>
                    <option className="font-semibold"  key={i} value={data?.value}>{data?.option}</option>
                  </>
                  
                ))} */}
        </select>
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
