import React, { useMemo, useState } from "react";
import Pagination from "../common/Pagination";

const PurchaseTable1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenMenu, setMenuOpen] = useState(false);
  let PageSize = 5;
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div>
      <div className="table-wapper">
        <table className="table-receipt">
          <thead>
            <tr>
              <th>Purchased By</th>
              <th>Amount</th>
              <th>Ref. ID</th>
              <th>Date & Time</th>
              <th>Retailer & Item</th>
              <th>Product ID</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData?.map((item) => {
              return (
                <tr>
                  <td>
                    <div className="flex justify-center items-center gap-6">
                      <img src="./Ellipse 2 (1).png" alt="" />
                      <p className="text-[#000000B2]">Lorem Ipsum</p>
                    </div>
                  </td>
                  <td className="font-semibold text-xl"> £500</td>
                  <td className="font-semibold text-[#000000B2]">ABCD12345</td>

                  <td>
                    DD/MM/YYYY <span className="text-[#0070BC]">(6:30 AM)</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src="./Ellipse 11 (1).png"
                        alt=""
                        className="h-10 w-10"
                      />
                      <div>
                        <p className="font-semibold">DUNKIN’</p>
                        <p className="text-[#000000B2]">Sweet Donuts</p>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold text-[#000000B2]">ABCD12345</td>
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
    </div>
  );
};

export default PurchaseTable1;
