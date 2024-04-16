import React, { useMemo, useState, useRef, useEffect } from "react";
import Pagination from "../common/Pagination";
import "./index.scss";
import PromoFilter from "./PromoFilter";
import CreatePromo from "./CreatePromo";
import MegaSale from "./MegaSale";
const PromoCode = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setActive] = useState(-1);
  const [isInactive, setInactive] = useState(-1);
  const [openReactive, setOpenReactive] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleReOpen = () => setOpenReactive(!open);
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  let PageSize = 3;
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const closeDrawer = () => setIsOpen(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setInactive(-1);
      }
    };

    if (isInactive !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isInactive]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef2.current && !divRef2.current.contains(event.target)) {
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
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold">Promo Code</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-64 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
        <div className="flex">
          <button
            className="flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
            <p className="text-[#0070BC] font-semibold">FILTERS</p>
          </button>
        </div>
        <div
          className="inventory-button gap-2"
          style={{ width: "220px" }}
          onClick={() => setOpen(true)}
        >
          <img src="./Mask group (11).png" alt="" />
          <p>CREATE PROMO CODE</p>
        </div>
      </div>
      <div className="table-wapper">
        <table className="table-receipt">
          <thead>
            <tr>
              <th>Promo Code ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date Created</th>
              <th>Validity</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item, i) => {
              return (
                <>
                  <tr>
                    <td>
                      <div className="flex gap-4 justify-center items-center">
                        <img src="./image 681.png" alt="" />
                        <p className="text-[#0070BC]">CODE500</p>
                      </div>
                    </td>
                    <td className="font-semibold">Mega Sale!</td>
                    <td>
                      <p className="text-[#000000B2]">
                        Get upto £500 Off on purchases over £1,000
                      </p>
                    </td>
                    <td>
                      <p className="text-[#000000B2]">DD/MM/YYYY</p>
                    </td>
                    <td>
                      <p className="text-[#000000B2]">3 Months</p>
                    </td>
                    <td>
                      <p className="text-[#3BB54A]">ACTIVE</p>
                    </td>
                    <td>
                      <div className="action">
                        <img
                          src="./Mask group (9).png"
                          alt=""
                          onClick={() => setActive(i)}
                        />
                        {isActive === i && (
                          <div className="action-main" ref={divRef2}>
                            <div className="flex items-center gap-6">
                              <img src="./image 119 (2).png" alt="" />
                              <p>De-Activate</p>
                            </div>
                            <div className="flex items-center gap-6">
                              <img src="./image 119 (3).png" alt="" />
                              <p>Edit Details</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex gap-4 justify-center items-center">
                        <img src="./image 681.png" alt="" />
                        <p className="text-[#0070BC]">CODE500</p>
                      </div>
                    </td>
                    <td className="font-semibold">Mega Sale!</td>
                    <td>
                      <p className="text-[#000000B2]">
                        Get upto £500 Off on purchases over £1,000
                      </p>
                    </td>
                    <td>
                      <p className="text-[#000000B2]">DD/MM/YYYY</p>
                    </td>
                    <td>
                      <p className="text-[#000000B2]">3 Months</p>
                    </td>
                    <td>
                      <p className="text-[#1E1E1E99]">EXPIRED!</p>
                    </td>
                    <td>
                      <div className="action">
                        <img
                          src="./Mask group (9).png"
                          alt=""
                          onClick={() => setInactive(i)}
                        />
                        {isInactive === i && (
                          <div className="action-main" ref={divRef}>
                            <div
                              className="flex items-center gap-6 cursor-pointer"
                              onClick={() => {
                                setOpenReactive(true);
                              }}
                            >
                              <img src="./image 119 (1).png" alt="" />
                              <p>Re-Activate</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isOpen && <PromoFilter closeDrawer={closeDrawer} open={isOpen} />}
      <CreatePromo open={open} setOpen={setOpen} handleOpen={handleOpen} />
      <MegaSale
        open={openReactive}
        setOpen={setOpenReactive}
        handleOpen={handleReOpen}
      />
    </div>
  );
};

export default PromoCode;
