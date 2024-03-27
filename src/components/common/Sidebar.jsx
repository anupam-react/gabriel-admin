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
        className="z-10 transition-transform -translate-x-full sm:translate-x-0 h-[100%]"
        style={{ backgroundColor: "#FFFFFF", color: "#00000080" }}
        aria-label="Sidebar"
      >
        <div className="h-full">
          <ul className="space-y-4 font-medium p-6">
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover ${
                  activeLink === 0 && "text-[#0070BC]"
                  }`}
             
                onClick={() => handleLinkClick(0)}
              >
                {activeLink === 0 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Transaction Data</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/customer"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 1 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(1)}
              >
                {activeLink === 1 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Customer Information</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/sales"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 2 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(2)}
              >
                {activeLink === 2 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Sales Analytics</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 3 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(3)}
              >
                {activeLink === 3 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Loyalty Program Management</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 4 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(4)}
              >
                {activeLink === 4 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Marketing Campaign</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 5 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(5)}
              >
                {activeLink === 5 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Digital Receipt</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 6 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(6)}
              >
                {activeLink === 6 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Inventory Integration</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 7 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(7)}
              >
                {activeLink === 7 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Comparison</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 8 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(8)}
              >
                {activeLink === 8 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Promo Code</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 9 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(9)}
              >
                {activeLink === 9 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Purchases</span>
              </Link>
            </li>
            <li className="pb-4">
              <Link
                to="/transaction"
                className={`flex items-center add-hover dark:text-white  dark:hover:bg-gray-700 group ${
                  activeLink === 10 && "text-[#0070BC]"
                }`}
                onClick={() => handleLinkClick(10)}
              >
                {activeLink === 10 ? 
                  <img src="./Mask group.png" alt="" className="w-5 h-5" /> :
                    <img src="./Mask group (1).png" alt="" className="w-5 h-5" />
                }
                <span className="ms-3">Heat Maps</span>
              </Link>
            </li>
        
      
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
