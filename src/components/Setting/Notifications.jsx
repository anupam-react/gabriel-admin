import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-[#0070BC] font-semibold">
        <span className="cursor-pointer" onClick={() => navigate("/setting")}>
          Settings {">"}{" "}
        </span>
        <span className="text-[#000000] text-lg">Notifications & Alerts</span>{" "}
      </p>
      <div className="notificationConatiner">
        <div>
          <p className="text-[#0070BC] font-semibold pb-[20px]">
            NOTIFICATION PREFERENCES
          </p>
          <p className="text-[#000000B2] font-[600] pb-[16px]">
            <span className="text-black">Mark</span> &{" "}
            <span className="text-black">Tick</span> all the notifications you
            want to Receive
          </p>
          <div className="mb-[10px]">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="pl-[30px]">
              Pending transaction for more than 24 Hrs
            </label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="pl-[30px]">
              When there is any Failed Transaction
            </label>
          </div>
        </div>
        <div className="text-black ">
          <p className="text-[#0070BC] font-semibold pb-[20px]">
            RECEIVE NOTIFICATIONS ON
          </p>
          <div className="mb-[10px] ">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="pl-[30px]">
              SMS
            </label>
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" className="pl-[30px]">
              Email
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
