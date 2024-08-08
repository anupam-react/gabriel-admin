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
          {dataInfo?.map((data, i)=>(
          <tr key={i}>
            <td>
              <div style={{ color: "#000000", fontWeight: 600 }}>{i+1}</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>{data?.stampSystemId?._id}</div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>
                07/12/2023,
                <br /> 3:00 pm
              </div>
            </td>
            <td>
              <div style={{ display:"flex" , justifyContent:"center" }}>
              <img src={data?.productId?.image} alt="" className="w-[200px] rounded-lg" />
              </div>
            </td>
            <td>
              <div style={{ color: "#000000B2" }}>Café Nero, <br /> Manchester Spinning Fields, M6 3AJ</div>
            </td>
          </tr>

          ))}
         
        </tbody>
      </table>
    </div>
  )
}

export default RedeemedStamp
