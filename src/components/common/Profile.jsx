import React from "react";
import { Drawer } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const Profile = ({ closeDrawer, open }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4 overflow-auto"
      >
        <div onClick={closeDrawer}>
          <img
            src="./Mask group (2).png"
            alt=""
            className="w-10 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center mb-6">
          <img src="./Ellipse 1 (1).svg" alt="" className="w-20 h-20 mb-4" />
          <p className="font-semibold pb-2">Dave Smith</p>
          <p className="text-sm">
            <span className="text-[#0070BC]">USER ID</span> - ABC2345
          </p>
          <div className="flex gap-2 cursor-pointer my-4">
            <img src="./Mask group (3).png" alt="" className="w-5 h-5" />
            <p className="text-[#FD575B]">SIGN OUT</p>
          </div>
          {/* <hr className="bg-[#00000099] w-full" /> */}
        </div>
        <div className="flex flex-col items-center gap-6">
          <div
            className="flex gap-6 cursor-pointer"
            onClick={() => navigate("/account")}
          >
            <img src="./Mask group (4).png" alt="" className="w-6 h-6" />
            <p className=" text-[#000000B2]">Manage Account</p>
          </div>
          <div
            className="flex gap-6 cursor-pointer"
            onClick={() => navigate("/setting")}
          >
            <img src="./Mask group (5).png" alt="" className="w-6 h-6" />
            <p className=" text-[#000000B2]">Change Settings</p>
          </div>
          <div
            className="flex gap-6 cursor-pointer"
            onClick={() => navigate("/support")}
          >
            <img src="./Mask group (6).png" alt="" className="w-6 h-6" />
            <p className=" text-[#000000B2]">Support & Help</p>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Profile;
