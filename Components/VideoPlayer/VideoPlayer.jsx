import { BsPlus } from "react-icons/bs";
import YouTube from "react-youtube";
const VideoPlayer = ({ videoPlaying, setVideoPlaying, videoInfo }) => {
  return (
    <div
      className={`fixed w-full h-screen bg-[#0000008d] bottom-0 transition-all ease-in-out duration-300 ${
        videoPlaying ? "top-[65px] " : "top-[4000px]"
      } z-50 px-2 flex justify-center items-center `}
    >
      <div
        className="absolute  top-0 right-0 text-white transform rotate-45 cursor-pointer"
        onClick={() => setVideoPlaying(false)}
      >
        <BsPlus size={50} />
      </div>
      <div className="absolute w-full h-[90%] bottom-0 top-[50px] bg-customWhite rounded-xl shadow-lg p-3">
        <h1  className="text-4xl pl-3 pb-2 font-Dosis font-semibold ">{videoInfo.name}</h1>
        <div className="absolute w-full h-[90%] bottom-0 top-[50px] bg-customWhite rounded-xl shadow-lg p-3 pt-1 pr-8">
          <YouTube
            className="w-full h-full flex justify-center items-center"
            videoId={videoInfo.key}
            containerClassName="w-full h-full flex justify-center items-center"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
