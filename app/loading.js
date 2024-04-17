"use client"
import useTheme from '@/hooks/useTheme';
import { ScaleLoader } from 'react-spinners';


const loading = () => {
  const [theme] = useTheme()
  
  let color= theme === "dark" ?  "#ffffff" : "#000000";

  return (
    <div className="h-screen w-full bg-customWhite dark:bg-customDark flex justify-center items-center ">
      <ScaleLoader
        color={color}
        loading={true}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default loading
