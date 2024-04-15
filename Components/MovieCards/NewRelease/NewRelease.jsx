"use client"
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import fallbackImage from "@/assets/fallbackImage.svg";


const NewRelease = ({width, movieInfo}) => {
  const [image, setImage] = useState(`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`)
  
  return (
    <div className={`h-[380px] w-${width} rounded-md overflow-hidden dark:bg-gray-950 bg-slate-200 flex flex-col flex-shrink-0`}>
      <div className="h-[80%] relative">
        <Image src={image} className="absolute w-full h-full object-cover" onError={() => {
            setImage(fallbackImage);
          }} />
      </div>
      <div className="flex justify-center items-center flex-col cursor-pointer"> 
        <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-2xl">{movieInfo.original_title}</p>
        <div className="flex flex-row justify-between items-center w-36 ">
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-gray-400" />
          <BsStarFill className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
