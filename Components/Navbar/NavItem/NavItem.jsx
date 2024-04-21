import Link from "next/link";
import { useRef } from "react";

const NavItem = ({ searching, tab, isActive, lastItem }) => {
  const subMenuRef = useRef(null);
  const handleSubMenuToggle = () => {
    if (!searching) {
      subMenuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="relative ml-[20px] ">
      <div
        className={` pr-[20px] mr-[10px]  cursor-pointer flex justify-between items-center  border-slate-600 ${
          tab.id === lastItem ? null : "border-r-[1px]"
        } ${searching ? "hidden" : null}`}
        onClick={handleSubMenuToggle}
      >
        {tab.name}
      </div>
      {tab.subMenu.length > 0 && (
        <div
          ref={subMenuRef}
          className={`absolute top-[30px] w-[172px] bg-customWhite dark:bg-customDark dark:text-customWhite text-customDark shadow-[2px_5px_28px_3px_rgba(204,204,204,0.65)] rounded  pt-4 hidden ${
            isActive && !searching ? "" : "hidden"
          } `}
        >
          {tab.subMenu.map((menu, i) => (
            <Link
              key={i}
              href={`/${
                tab.id === 3
                  ? "user"
                  : tab.name.toLowerCase().replaceAll(" ", "-")
              }/${tab.id === 4 ? "" : menu.toLowerCase().replaceAll(" ", "-")}`}
              prefetch
            >
              <div className="text-[14px] px-3 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-100 p-1 rounded ">
                {" "}
                {menu}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
