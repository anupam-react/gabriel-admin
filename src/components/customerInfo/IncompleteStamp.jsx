import React, { useEffect, useState } from "react";
import AwardMenu from "./AwardMenu";
import { fetchApiData } from "../../utiils";

const IncompleteStamp = ({data}) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenMenu2, setOpenMenu2] = useState(false);

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
          <tr>
            <td>
              07/12/2023,
              <br /> 3:00 pm
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div style={{
                  position: "relative",
                }}>
                <img src="./Group 570.png" alt=""  />
                <img
                  src="./Vector (3).png"
                  alt=""
                  className="dot-image2"
                  onClick={() => setOpenMenu(!isOpenMenu)}
                />

                </div>
                {isOpenMenu && (
                  <div className="award-menu-main">
                    <AwardMenu />
                  </div>
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              07/12/2023,
              <br /> 3:00 pm
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div style={{
                  position: "relative",
                }}>
                <img src="./Group 570.png" alt=""  />
                <img
                  src="./Vector (3).png"
                  alt=""
                  className="dot-image2"
                  onClick={() => setOpenMenu2(!isOpenMenu2)}
                />

                </div>
                {isOpenMenu2 && (
                  <div className="award-menu-main">
                    <AwardMenu />
                  </div>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IncompleteStamp;
