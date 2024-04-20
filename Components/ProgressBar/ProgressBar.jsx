"use client";
import { useEffect, useState } from "react";
import styles from "./progressbar.module.css";
function  getRandomInt (){
  return Math.floor(Math.random()*((10-5)+1))+5
}
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + getRandomInt()
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingBar} style={{ width: `${progress}%` }}></div>
      <div className={styles.loadingContent}>
        <div className={styles.loadingSpinner}></div>
        <div className={styles.loadingText}>Loading...</div>
      </div>
    </div>
  );
};

export default ProgressBar;
