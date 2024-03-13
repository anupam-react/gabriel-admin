import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="z-40 w-56 transition-transform -translate-x-full sm:translate-x-0 h-[100%]"
        style={{ backgroundColor: "#CB7EFF", color: "#FFFFFF" }}
        aria-label="Sidebar"
      >
        <div className="h-full py-4">
          <div className="m-4">
            <div className="flex justify-between">
              <img src="" alt="Logo" />
              <img src="./indent-decrease.png" alt="" />
            </div>
          </div>
          <p className="whitespace-nowrap dark:text-white m-6 mb-4 mt-14">
            MAIN
          </p>
          <hr className="mx-4" />
          <ul className="space-y-2 font-medium">
            <li className="m-4">
              <Link
                to="/dashboard"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 0 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(0)}
              >
             
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/memberList"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 1 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(1)}
              >
            
                <span className="ms-3">Member List</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/loan-approval"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 2 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(2)}
              >
            
                <span className="ms-3">Party </span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/leads"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 3 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(3)}
              >
            
                <span className="ms-3">Morcha list</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/faq"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 4 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(4)}
              >
             
                <span className="ms-3">District List</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/partners"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 5 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(5)}
              >
           
                <span className="ms-3">President List</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/benefits"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 6 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(6)}
              >
             
                <span className="ms-3">Job List</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/banners"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 7 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(7)}
              >
                
                <span className="ms-3">Banner List</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/rating"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 8 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(8)}
              >
                <span className="ms-3">Banner Edit Request</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/rating"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 8 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(8)}
              >
               
                <span className="ms-3">Bulk Message</span>
              </Link>
            </li>
            <li className="m-4">
              <Link
                to="/rating"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 8 && "bg-white text-black rounded-lg"
                }`}
                onClick={() => handleLinkClick(8)}
              >
               
                <span className="ms-3">Survey</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
