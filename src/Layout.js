// Layout.js
import React from "react";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6" style={{ backgroundColor: "#EEEEEE" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
