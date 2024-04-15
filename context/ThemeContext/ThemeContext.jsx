"use client";
import { Children, createContext } from "react";

export const ThemeContext = createContext(null);
const ThemeContextProvider = ({ children }) => {
  const theme = localStorage.getItem("theme");
  return(
      <ThemeContext.Provider value={{theme}}>{Children}</ThemeContext.Provider>
  )

};
export default ThemeContextProvider;