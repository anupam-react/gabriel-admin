import React, { useEffect, useState } from 'react'
import { fetchApiData } from '../../utiils';

const RedeemedStamp = ({data}) => {

  const [dataInfo, setDataInfo] = useState();

  const getAllRedeemedStampVouchers = async () => {
    const response = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getAllRedeemedStampVouchers/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllRedeemedStampVouchers();
  }, []);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Voucher</th>
            <th>Voucher ID</th>
            <th>Date Redeemed</th>
            <th>Product Claimed</th>
            <th>Outlet Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div style={{ color: "#000000", fontWeight: 600 }}>01</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>VCI89585279 5279</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>
                07/12/2023,
                <br /> 3:00 pm
              </div>
            </td>
            <td>
              <div style={{ display:"flex" , justifyContent:"center" }}>
                <img src="./Group 598.png" alt=""  />
              </div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>Café Nero, <br /> Manchester Spinning Fields, M6 3AJ</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style={{ color: "#000000", fontWeight: 600 }}>02</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>VCI89585279 5279</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>
                07/12/2023,
                <br /> 3:00 pm
              </div>
            </td>
            <td>
              <div style={{ display:"flex" , justifyContent:"center" }}>
                <img src="./Group 598.png" alt=""  />
              </div>
            </td>
            <td>
               <div style={{ color: "#000000B2" }}>Café Nero, <br /> Manchester Spinning Fields,  M6 3AJ</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RedeemedStamp
