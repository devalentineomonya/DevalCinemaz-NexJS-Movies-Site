
import { BsPlus } from "react-icons/bs";
const VideoPlayer = ({videoPlaying, setVideoPlaying}) => {
    

  return (
    <div className={`fixed w-full h-screen bg-[#0000008d] bottom-0 transition-all ease-in-out duration-300 ${ videoPlaying ?  "top-[65px] " : "top-[4000px]"} z-50 px-2 flex justify-center items-center `}>
        <div className="absolute  top-0 right-0 text-white transform rotate-45 cursor-pointer" onClick={()=>setVideoPlaying(false)}>
            <BsPlus size={50}/>
        </div>
      <div className="absolute w-full h-[90%] bottom-0 top-[50px] bg-customWhite rounded-xl shadow-lg">

      </div>
    </div>
  );
};

export default VideoPlayer;
