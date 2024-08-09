import React, { useEffect, useState } from "react";
import "./index.scss";
import { fetchApiData, formatTime2, getDateFromISOString } from "../../utiils";
const CurrentStamp = ({ data }) => {
  const [dataInfo, setDataInfo] = useState();

  const getAllCurrentStampVouchers = async () => {
    const response = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getAllCurrentStampVouchers/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllCurrentStampVouchers();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Voucher</th>
            <th>Voucher ID</th>
            <th>Date Awarded</th>
            <th>Product Claimed</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i) => (
            <tr key={i}>
              <td>
                <div style={{ color: "#000000", fontWeight: 600 }}>{i + 1}</div>
              </td>
              <td>
                <div style={{ color: "#000000B2" }}>
                  {data?.stampSystemId?._id}
                </div>
              </td>
              <td>
                <div style={{ color: "#000000B2" }}>
                  {getDateFromISOString(data?.stampSystemId?.createdAt)},
                  <br /> {formatTime2(data?.stampSystemId?.createdAt)}
                </div>
              </td>
              <td>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={data?.productId?.image}
                    alt=""
                    className="w-[200px] rounded-lg"
                  />
                </div>
              </td>
              <td>
                <div style={{ color: "#000000B2" }}>
                  {" "}
                  {getDateFromISOString(data?.expireDate)}, <br />{" "}
                  {formatTime2(data?.expireDate)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrentStamp;
