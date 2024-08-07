import React, { useEffect, useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import ProductDetails from "./ProductDetails";
import { fetchApiData } from "../../utiils";

const MoneyTransferTable = ({data}) => {
  const [openTransaction, setOpenTransaction] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllCustomerPointEarnedFromMoneyTransferRewards = async () => {
    const response = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getAllCustomerPointEarnedFromMoneyTransferRewards/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllCustomerPointEarnedFromMoneyTransferRewards();
  }, []);

  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Reward Amount</th>
            <th>Points Earned</th>
            <th>Reward Conversion Date</th>
            <th>Product(s) Claimed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>£15</p>
            </td>
            <td>
              <div>1500</div>
            </td>
            <td>30/11/2023</td>
            <td>
              <div className="table-flex">
                <img src="./Group 527.png" alt="" className="cursor-pointer" style={{ width: "100px" }} onClick={() => setOpenDetails(true)}/>
                <p className="cursor-pointer" onClick={() => setOpenTransaction(true)}>
                  <span
                    style={{ color: "#3BB54A", textDecoration: "underline" }}
                  >
                    Claimed
                  </span>{" "}
                  <br />
                  HoneyComb Mocha 09/12/2023,11:00 am{" "}
                  <span
                    className="id-link"
                    
                  >
                    {" "}
                    See transaction
                  </span>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>£15</p>
            </td>
            <td>
              <div>1500</div>
            </td>
            <td>30/11/2023</td>
            <td>
              <div className="table-flex">
                <img src="./Group 527.png" alt="" className="cursor-pointer" style={{ width: "100px" }} onClick={() => setOpenDetails(true)}/>
                <p className="cursor-pointer" onClick={() => setOpenTransaction(true)}>
                  <span
                    style={{ color: "#3BB54A", textDecoration: "underline" }}
                  >
                    Claimed
                  </span>{" "}
                  <br />
                  HoneyComb Mocha 09/12/2023,11:00 am{" "}
                  <span
                    className="id-link"
                    
                  >
                    {" "}
                    See transaction
                  </span>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
      <DialogDefault open={openDetails} handleOpen={setOpenDetails}>
        <ProductDetails handleOpen={setOpenDetails} />
      </DialogDefault>
    </div>
  );
};

export default MoneyTransferTable;
