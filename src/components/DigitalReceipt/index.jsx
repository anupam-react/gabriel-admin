import React, { useMemo, useState, useRef, useEffect } from "react";
import Pagination from "../common/Pagination";
import "./index.scss";
import ReceiptFilter from "./ReceiptFilter";
const DigitalReceipt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setMenuOpen] = useState(-1);
  const divRef = useRef(null);
  let PageSize = 5;
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
        setMenuOpen(-1);
      }
    };

    if (isOpenMenu !== -1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <div>
      <div className="flex gap-10 items-center mb-4">
        <p className="text-2xl font-bold">Digital Receipt</p>
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
      </div>
      <div className="table-wapper">
        <table className="table-receipt">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date Uploaded</th>
              <th>Uploaded By</th>
              <th>Document Type</th>
              <th>Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item, i) => {
              return (
                <tr>
                  <td className="text-[#000000B2]">Lorem Ipsum Title</td>
                  <td>
                    DD/MM/YYYY <span className="text-[#0070BC]">(6:30 AM)</span>
                  </td>
                  <td>
                    <div className="flex justify-center items-center gap-6">
                      <img src="./Ellipse 2 (1).png" alt="" />
                      <p className="text-[#000000B2]">Lorem Ipsum</p>
                    </div>
                  </td>
                  <td>PDF</td>
                  <td>11 Mb</td>
                  <td>
                    <div className="action">
                      <img
                        src="./Mask group (9).png"
                        alt=""
                        onClick={() => setMenuOpen(i)}
                      />
                      {isOpenMenu === i && (
                        <div className="action-main shadow" ref={divRef}>
                          <div className="flex gap-6">
                            <img src="./image 119.png" alt="" />
                            <p>View</p>
                          </div>
                          <div className="flex gap-6">
                            <img src="./image 674.png" alt="" />
                            <p>Download</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
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
      {isOpen && <ReceiptFilter closeDrawer={closeDrawer} open={isOpen} />}
    </div>
  );
};

export default DigitalReceipt;
