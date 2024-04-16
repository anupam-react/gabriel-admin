import React from "react";

const CatalogueProduct = () => {
  return (
    <div className="catalogue-container">
      <p className="view-all">View All</p>
      <div className="catalogue-flex">
        <div className="catelogue-main">
          <img src="./image 711.png" alt="" />
          <p className="prod-name2" style={{ fontSize: "14px" }}>
            Oreo Coffee
          </p>
        </div>
        <div className="catelogue-main">
          <img src="./image 713.png" alt="" />
          <p className="prod-name" style={{ fontSize: "14px" }}>
            Donuts
          </p>
        </div>
        <div className="catelogue-main">
          <img src="./image 711.png" alt="" />
          <p className="prod-name" style={{ fontSize: "14px" }}>
            Oreo Coffee
          </p>
        </div>
        <div className="catelogue-main">
          <img src="./image 713.png" alt="" />
          <p className="prod-name" style={{ fontSize: "14px" }}>
            Donuts
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatalogueProduct;
