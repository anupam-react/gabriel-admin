import React, { useEffect, useState } from "react";
import InfoHeader from "./InfoHeader";
import MenuCard3 from "./MenuCard3";
import HistoryDetails from "./HistoryDetails";
import { DialogDefault } from "../common/DilogBox";
import { fetchApiData, getDateFromISOString } from "../../utiils";

const BookMark = ({ handleOpen, onClose, data }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);

  const [dataInfo, setDataInfo] = useState();

  const getAllBookMarks = async () => {
    const response = await fetchApiData(
      `https://gabriel-backend.vercel.app/api/v1/brandLoyalty/getAllBookMarks/ByUserId/${data?._id}`
    );
    console.log(response);
    setDataInfo(response?.data);
  };

  useEffect(() => {
    getAllBookMarks();
  }, []);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Bookmark</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader onClose={onClose} data={data} />
      <div
        className="cursor-pointer"
        onClick={() => handleOpen(false)}
        style={{ paddingTop: "30px", paddingBottom: "20px" }}
      >
        <p style={{ color: "#0070BC", fontWeight: 600 }}>BOOK MARKS</p>
        <hr className="hr3" style={{ width: "120px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Product</th>
            <th>Bookmark Date</th>
            <th>Visits</th>
            <th>Time Spent</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo?.map((data, i) => (
            <tr key={i}>
              <td className="">
                <div className="bookmarkImage">
                  <img
                    src={data?.bookMark?.productId?.image}
                    alt=""
                    className="image1"
                  />
                  <div className="bookmarkText">
                    <p>GIFT A {data?.bookMark?.productId?.name}</p>
                    <p style={{ fontSize: "14px" }}>
                      Gift a {data?.bookMark?.productId?.name} (UK Only) for £
                      {data?.bookMark?.productId?.price}{" "}
                    </p>
                  </div>
                  <img
                    src="./charm_menu-meatball.png"
                    alt=""
                    className="dot-image"
                    onClick={() => {
                      if (openMenu === i + 1) setOpenMenu(false);
                      else setOpenMenu(i + 1);
                    }}
                  />
                  {openMenu === i + 1 && (
                    <MenuCard3
                      onClose={() => setOpenMenu(false)}
                      id={data?.userId}
                    />
                  )}
                </div>
              </td>
              <td>{getDateFromISOString(data?.bookMark?.createdAt)}</td>
              <td>
                {" "}
                <span
                  className="id-link"
                  onClick={() => setOpenTransaction(data?.visit)}
                >
                  {data?.visit?.length} visits,
                </span>{" "}
                <br />
                Last Visit: Today, 10:30 pm
              </td>
              <td>{data?.totalTimeSpent / 60} sec</td>
            </tr>
          ))}
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <HistoryDetails
          handleOpen={setOpenTransaction}
          data={openTransaction}
        />
      </DialogDefault>
    </div>
  );
};

export default BookMark;
