import { useContext } from "react";
import { PiPlayFill } from "react-icons/pi";
import { TbPlayerPauseFilled, TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import { PiSpeakerHighFill } from "react-icons/pi";



const Player = () => {
  const {
    isPlaying,
    playSongHandler,
    songInfo,
    audioRef,
    skipTrackHandler,
  } = useContext(MusicPlayerContext);



  const getTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="player flex flex-col items-center p-6">
      <div className="time-control flex justify-between   items-center w-full mb-4">
        <p className="text-white">
          {songInfo.currentTime ? getTime(songInfo.currentTime) : "00:00"}
        </p>
        <div className="track  w-full mx-4 text-[#5474b4]">
          <input
            type="range"
            min="0"
          
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={(e) => (audioRef.current.currentTime = e.target.value)}
            className="w-full cursor-pointer h-3   bg-[#dce4f5]"
          />
        </div>
        <p className="text-white">
          {songInfo.duration ? getTime(songInfo.duration) : "00:00"}
        </p>
      </div>

      <div className="play-control flex gap-8 justify-center items-center">
      
        <TbPlayerTrackPrevFilled
          onClick={() => skipTrackHandler("skip-back")}
          className="text-white cursor-pointer hover:text-gray-400"
        />
        {isPlaying ? (
          <TbPlayerPauseFilled
            onClick={playSongHandler}
            className="text-white cursor-pointer hover:text-gray-400"
          />
        ) : (
          <PiPlayFill
            onClick={playSongHandler}
            className="text-white cursor-pointer hover:text-gray-400"
          />
        )}
        <TbPlayerTrackNextFilled
          onClick={() => skipTrackHandler("skip-forward")}
          className="text-white cursor-pointer hover:text-gray-400"
        />
       
      </div>
      

    </div>
  );
};

export default Player;


