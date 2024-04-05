import React, { useState } from "react";
import "./index.scss";
import CampaignMenu from "./CampaignMenu";
const CampaignCard1 = ({
  isButton = false,
  isStar = false,
  isPause = false,
  isGift = false,
  image,
  isLive = false,
  title,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="campaign-card1-container">
      <div className="card-hearder">
        <p className="">
          Campaign : <span className="text-[#1BB4F0]">{title}</span>
        </p>
        <p>
          Current Sales made : <span className="text-[#00B050]">£2500</span>{" "}
        </p>
        <p>
          Ad Spent : <span className="text-[#FEA82F]">£25</span>
        </p>
      </div>
      <div className="campaign-image">
        <img src={image} alt="" className="prod-img" />
        <img
          src="./solar_menu-dots-bold.png"
          alt=""
          className="menu-dots"
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && <CampaignMenu isLive={isLive} isPause={isPause} />}
        {isGift && (
          <div className="flex justify-end mt-2 items-center gap-2 mr-2">
            <img src="./mdi_gift.png" alt="" />
            <p>500</p>
            {isStar ? (
              <img src="./image 698 (2).png" alt="" />
            ) : (
              <img src="./Vector (11).png" alt="" />
            )}
          </div>
        )}
      </div>
      <p>Expiry Date : 04 Jan 2024, 1:30 am</p>
      {isButton && <button className="run-again">Run Again</button>}
      {isPause && (
        <button className="unpause">
          Unpause to continue run your ad campaign
        </button>
      )}
    </div>
  );
};

export default CampaignCard1;
