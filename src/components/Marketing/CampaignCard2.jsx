import React, { useState } from "react";
import "./index.scss";
import CampaignMenu from "./CampaignMenu";
const CampaignCard2 = ({
  isButton = false,
  isPause = false,
  isShop = true,
  isLive = false,
  image,
  title,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="campaign-card1-container">
      <div className="card-hearder">
        <p className="">
          Campaign : <span className="text-[#1BB4F0]">{title}</span>
        </p>
        {isShop ? (
          <>
            <p>
              Current link clicks : <span className="text-[#00B050]">300</span>{" "}
            </p>
            <p>
              Current Visitors to shop :{" "}
              <span className="text-[#00B050]">300</span>{" "}
            </p>
          </>
        ) : (
          <p>
            Current Followers Gained :{" "}
            <span className="text-[#00B050]">300</span>{" "}
          </p>
        )}
        <p>
          Ad Spent : <span className="text-[#FEA82F]">£25</span>
        </p>
      </div>
      <div className="flex justify-between relative">
        <div className="flex gap-4">
          <div>
            <img src="./image 720 (1).png" alt="" />
          </div>
          <div>
            <p>Cafe Coffee Day </p>
            <div className="flex items-center gap-2">
              <p>Sponsored</p>
              <img src="./Vector (10).png" alt="" className="h-fit" />
            </div>
          </div>
        </div>
        <img
          src="./solar_menu-dots-bold.png"
          alt=""
          className="h-fit cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
        {openMenu && <CampaignMenu isLive={isLive} />}
      </div>
      <p>Follow us Café Nero to see the latesttrends and offers</p>
      <div className="campaign-image">
        <img src="./Group 38198 (1).png" alt="" className="prod-img" />
      </div>
      <div className="flex justify-between items-center">
        <p>Cafe Coffee Day</p>
        {isShop ? (
          <button className="shop-now">Shop Now</button>
        ) : (
          <div>
            <div className="flex gap-2 items-center">
              <img src="./ph_heart.png" alt="" />
              <p>300</p>
            </div>
            <p>Followers</p>
          </div>
        )}
      </div>
      {isButton && <button className="run-again">Run Again</button>}
      {isPause && (
        <button className="unpause">
          Unpause to continue run your ad campaign
        </button>
      )}
    </div>
  );
};

export default CampaignCard2;
