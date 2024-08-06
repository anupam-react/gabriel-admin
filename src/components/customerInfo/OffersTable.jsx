import React, { useEffect, useState } from "react";
import InfoHeader from "./InfoHeader";
import { fetchApiData } from "../../utiils";

const OffersTable = ({ handleOpen , onClose , data }) => {
  const [dataInfo, setDataInfo] = useState();

  const getAllOffers = async () => {
    const response = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getAllOffers/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(()=>{
    getAllOffers()
  },[])

  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Offers</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader  onClose={onClose} data={data}/>
      <div className="cursor-pointer" onClick={() => handleOpen(false)} style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <p style={{ color: "#0070BC", fontWeight: 600 }}>OFFERS</p>
        <hr className="hr3" style={{ width: "70px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Offer</th>
            <th>Date Sent</th>
            <th>Read Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex justify-center">
                <img src="./Group 38082.png" alt="" />
              </div>
            </td>
            <td>10/12/2023</td>
            <td>
              <span className="id-link" style={{ color: "#3BB54A" }}>
                Read
              </span>
              <br />
              Yesterday 6:00 pm.
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center">
                <img src="./Group 38082.png" alt="" />
              </div>
            </td>
            <td>10/12/2023</td>
            <td>
              <span className="id-link" style={{ color: "#3BB54A" }}>
                Read
              </span>
              <br />
              Yesterday 6:00 pm.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OffersTable;
