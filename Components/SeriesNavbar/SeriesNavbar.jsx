"use client";

import { useRouter } from "next/navigation";

const SeriesNavbar = ({ pt = 0, h, py = 0, tabsNames, seriesId }) => {
  const router = useRouter();

  function handleNavigation(tabId) {
    if (tabId === 1) {
      router.push(seriesId + "/seasons");
    }
  }
  return (
    <div className={`w-full dark:bg-customDark bg-customWhite h-${h} pt-${pt}`}>
      <div
        className={`w-full h-full dark:bg-gray-500 bg-gray-300 flex justify-center items-center flex-row gap-x-4 py-${py}`}
      >
        {tabsNames &&
          tabsNames.map((tabButton, i) => (
            <button
              onClick={() => handleNavigation(tabButton.id)}
              className="dark:text-customWhite text-customDark font-Dosis font-semibold text-xl hover:text-customGreen"
              key={i}
            >
              {tabButton.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SeriesNavbar;
