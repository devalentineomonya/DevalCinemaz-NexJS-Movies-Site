// NavItem.js
import React, { useRef } from "react";

const NavItem = ({ searching, tab, setActiveTab, activeTab }) => {

  const subMenuRef = useRef(null);

  const handleSubMenuToggle = () => {
      setActiveTab(tab.id)
      console.log(activeTab);
    
  };

  return (
    <div className="relative mr-[20px] ">
      <div
        className={`group w-[110px] cursor-pointer text-customWhite flex justify-between items-center mr-[10px] border-r-[1px] pr-[10px] group-last:border-r-0 ${
          searching ? "hidden" : null
        }`}
        onMouseEnter={handleSubMenuToggle}
      >
        {tab.name}
      </div>
      {tab.subMenu.length > 0 && (
        <div
          ref={subMenuRef} 
          className={`absolute top-[30px] w-[172px] bg-customWhite shadow-md rounded  py-2 hidden ${
            activeTab === tab.id && !searching ? "" : "hidden" // Show only if active and not searching
          } `}
        >
          {tab.subMenu.map((menu, i) => (
            <div key={i} className="text-[14px] px-3 cursor-pointer hover:bg-gray-100 p-1 ">
              {menu}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
