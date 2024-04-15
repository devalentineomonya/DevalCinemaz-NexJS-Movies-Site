import React from "react";
import styles from "./loadinganimation.module.css"

const LoadingCard = () => {
  const loadingBars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
  return (
    <div className={`w-72 h-96 flex justify-between gap-x-3 bg-red-600 ${styles.loadingBars}`}>
      {loadingBars.map(() => (
        <div className="h-full w-5 rounded-t-full bg-green-500 loading-bar"></div>
      ))}
    </div>
  );
};

export default LoadingCard;
