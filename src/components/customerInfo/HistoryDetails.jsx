import React from "react";
import "./index.scss";
const HistoryDetails = ({ handleOpen }) => {
  return (
    <div className="details-container">
      <p className="details-title underline"  style={{paddingBottom:"30px"}}>Visit History</p>
      <img
        src="./Mask group (2).png"
        alt=""
        className="cross-image2"
        onClick={() => handleOpen(false)}
      />
      <table className="history-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Timing</th>
            <th>Time Spent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>18/12/2023</td>
            <td>10:30 AM</td>
            <td>45 Sec</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>18/12/2023</td>
            <td>10:30 AM</td>
            <td>45 Sec</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>18/12/2023</td>
            <td>10:30 AM</td>
            <td>45 Sec</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>18/12/2023</td>
            <td>10:30 AM</td>
            <td>45 Sec</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>18/12/2023</td>
            <td>10:30 AM</td>
            <td>45 Sec</td>
          </tr>
        </tbody>
      </table>
      <hr style={{ width: "100%" }} />
        <button className="menuButton4" style={{margin:"20px 0px" , width:"180px"}}>Done</button>
    </div>
  );
};

export default HistoryDetails;
