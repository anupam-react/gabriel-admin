import React, { useState, useMemo, useEffect, useRef } from "react";

import Pagination from "../common/Pagination";
import MenuCard from "./MenuCard";
import { DialogDefault } from "../common/DilogBox";
import CustomeInfo from "./CustomeInfo";
import "./index.scss";
import useCusomerInfo from "../../hooks/useCusomerInfo";
import { getDateFromISOString } from "../../utiils";

const PaginatedTable = () => {
  const {  
    customer,
    customerInfo,
    getCustomerInfoForParticularUser,
    isOpenInfo, setOpenInfo
  } = useCusomerInfo()
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const [isActive, setActive] = useState(-1);

  console.log(customer , customerInfo)

  let PageSize = 3;
  

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return customer?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage , customer]);

  const divRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setActive(-1);
      }
    };

    if (isActive !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <>
      <table className="table1">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date Joined</th>
           
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, i) => {
            return (
              <tr key={i}>
                <td className="w-1/2">
                  <div className="flex items-center gap-6 ml-[100px] my-2 relative">
                    <div className="profile-image">
                      <img src={item?.userId?.image || "./carbon_user-avatar-filled.png"} alt="" />
                      <img
                        src="./solar_menu-dots-bold (1).png"
                        alt=""
                        className="absolute top-1 right-1 cursor-pointer"
                        onClick={() => {
                          if(isOpenMenu === item?._id) setOpenMenu(false)
                          else
                          setOpenMenu(item?._id)}}
                      />
                    </div>
                    <div className="flex flex-col gap-1 font-[500]" onClick={() =>{
                       setOpenInfo(true)
                       getCustomerInfoForParticularUser(item?.userId?._id)
                       }}>
                    <p className="profileId text-left" >
                  {item?.userId?.firstName + " " + item?.userId?.lastName }
                    </p>
                    <p className="profileId">
                      ID:{item?.userId?._id}
                    </p>

                    </div>
                    {isOpenMenu === item?._id && (
                      <div className="menu-Main">
                        <MenuCard onClose={()=> setOpenMenu(false)} setOpenInfo={setOpenInfo} isOpenMenu={isOpenMenu} data={item?.userId}/>
                      </div>
                    )}
                  </div>
                </td>
                <td>{getDateFromISOString(item?.userId?.createdAt)}</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={customer?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <DialogDefault open={isOpenInfo} handleOpen={setOpenInfo}>
        <CustomeInfo handleOpen={setOpenInfo} customerInfo={customerInfo} />
      </DialogDefault>
    </>
  );
};

export default PaginatedTable;
