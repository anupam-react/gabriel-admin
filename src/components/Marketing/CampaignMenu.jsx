import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
const CampaignMenu = ({ isLive = false, isPause = false }) => {
  const [openPause, setOpenPause] = useState(false);
  const [openunPause, setOpenunPause] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const naviagte = useNavigate();
  return (
    <div className="campaign-menu-main">
      {isLive ? (
        <div className="campaign-menu-container">
          <p
            onClick={() => naviagte("/marketing/view")}
            className="cursor-pointer"
          >
            View
          </p>
          <p>Edit</p>
          {isPause ? (
            <p className="cursor-pointer" onClick={() => setOpenunPause(true)}>
              Un Pause
            </p>
          ) : (
            <p onClick={() => setOpenConfirm(true)} className="cursor-pointer">
              Pause
            </p>
          )}
        </div>
      ) : (
        <div className="campaign-menu-container">
          <p>Manage</p>
          <p>Edit and Run</p>
        </div>
      )}
      <DialogDefault open={openConfirm} handleOpen={setOpenConfirm}>
        <div className="flex flex-col justify-center items-center h-[200px]">
          <p className="text-black font-semibold">
            Do you want to pause this Campaign?
          </p>
          <div className="flex gap-4 mt-6">
            <button
              className="w-[120px] bg-[#0070BC] py-2 text-white rounded-md"
              onClick={() => setOpenPause(true)}
            >
              Yes
            </button>
            <button
              className="w-[120px] bg-[#FEA82F] py-2 text-white rounded-md"
              onClick={() => setOpenConfirm(false)}
            >
              No
            </button>
          </div>
        </div>
      </DialogDefault>
      <DialogDefault open={openPause} handleOpen={setOpenPause}>
        <div className="flex flex-col justify-center items-center h-[200px] px-8">
          <img src="./Vector (13).png" alt="" />
          <p className="text-black font-semibold pt-4 text-center">
            ‘Your ad is now paused. You won’t be charged while your ad is
            paused. Come back when ready and unpaused to continue running your
            ad’
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={openunPause} handleOpen={setOpenunPause}>
        <div className="flex flex-col justify-center items-center h-[200px] px-8">
          <img src="./Vector (12).png" alt="" />
          <p className="text-black font-semibold pt-4 text-center">
            ‘Your have Successfully Un pause the Ad”
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default CampaignMenu;
