import React, { useState } from "react";
import "./index.scss";
import InventoryCard from "./InventoryCard";
import InventoryFilter from "./InventoryFilter";
const Inventory = () => {
    const [isOpen, setIsOpen] = useState(false);
       const closeDrawer = () => setIsOpen(false);
  const data = [
    {
      image: "./Rectangle 8765 (3).png",
      price: "£5",
      name: "Butter Croissant",
    },
    {
      image: "./Rectangle 8765 (4).png",
      price: "£15",
      name: "Salted Caramel Muffin",
    },
    {
      image: "./Rectangle 8765 (5).png",
      price: "£75",
      name: "Flat White",
    },
    {
      image: "./Rectangle 8765 (6).png",
      price: "£25",
      name: "Cinnamon Swirf",
    },
    {
      image: "./Rectangle 8765 (7).png",
      price: "£55",
      name: "Ginger Cookie Latte Iced",
    },
    {
      image: "./Rectangle 8765 (8).png",
      price: "£12",
      name: "Chocolate Croissant",
    },
    {
      image: "./Rectangle 8765 (9).png",
      price: "£5",
      name: "Milk Chocolate Cookie",
    },
    {
      image: "./Rectangle 8765 (10).png",
      price: "£115",
      name: "Salted Caramel Frozen coffee",
    },

  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Inventory</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search "
          />
        </div>
        <div className="flex">
          <button className="flex items-center gap-2"  onClick={() => setIsOpen(true)}>
            <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
            <p className="text-[#0070BC] font-semibold">FILTERS</p>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="inventory-button">
            <img src="./Mask group (11).png" alt="" />
            <p>ADD PRODUCT</p>
          </div>
          <div className="inventory-button">
            <img src="./Mask group (11).png" alt="" />
            <p>ADD MORE OUTLETS</p>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <select
          id="countries"
          // value={selectedOption}
          // onChange={handleChange}
          className="rounded-lg shadow-md text-gray-900 text-sm  border-none block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option className="font-semibold" value="CATEGORY">
            CATEGORY
          </option>
        </select>
        <select
          id="countries"
          // value={selectedOption}
          // onChange={handleChange}
          className="rounded-lg shadow-md text-gray-900 text-sm  border-none block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option className="font-semibold" value="SUB-CATEGORY">
            SUB-CATEGORY
          </option>
        </select>
      </div>
          <div className="card-main">
              {
                  data?.map((d, i) => (
                      
                      <InventoryCard data={d} />
                  ))
              }
          </div>
               {isOpen && <InventoryFilter closeDrawer={closeDrawer} open={isOpen}/>}
    </div>
  );
};

export default Inventory;
