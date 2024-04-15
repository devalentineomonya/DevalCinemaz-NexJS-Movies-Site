import { useEffect, useState } from 'react';

const useTheme = () => {
    const [storedTheme, setStoredTheme] =  useState("dark")

    useEffect(()=>{
        let theme = localStorage.getItem("theme");
        setStoredTheme(theme)
    },[])
    
    const [theme, setTheme] = useState(storedTheme);
    const [darkMode, setDarkMode] = useState(storedTheme === "dark");

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

  
    return [theme, setTheme, darkMode, setDarkMode];
};

export default useTheme;
