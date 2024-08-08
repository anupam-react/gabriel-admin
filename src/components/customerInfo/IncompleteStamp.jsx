import React, { useEffect, useState } from "react";
import AwardMenu from "./AwardMenu";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";

const IncompleteStamp = ({ data }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllInCompleteStampVouchers = async () => {
    const response = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getAllInCompleteStampVouchers/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllInCompleteStampVouchers();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Date Redeemed</th>
            <th>Product Claimed</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i) => (
            <tr key={i}>
              <td>
                {getDateFromISOString(data?.createdAt)},
                <br /> {formatTime2(data?.createdAt)}
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                    className="w-[200px]"
                  >
                    <img
                      src={data?.productId?.image}
                      alt=""
                      className="w-[200px] rounded-lg"
                    />
                    <img
                      src="./Vector (3).png"
                      alt=""
                      className="dot-image2"
                      onClick={() => {
                        if (isOpenMenu === i + 1) setOpenMenu(false);
                        else setOpenMenu(i + 1);
                      }}
                    />
                  </div>
                  {isOpenMenu === i + 1 && (
                    <div className="award-menu-main">
                      <AwardMenu data={data} />
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncompleteStamp;
