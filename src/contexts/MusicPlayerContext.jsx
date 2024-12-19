import React, { createContext, useState, useRef, useContext } from "react";

// Create the MusicPlayerContext
export const MusicPlayerContext = createContext();




// Create the MusicPlayerProvider
export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  const audioRef = useRef(new Audio());

  const playSongHandler = () => {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSongSelect = (song) => {
    if (currentSong?.src !== song.src) {
      audioRef.current.src = song.src;
      setCurrentSong(song);
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      playSongHandler();
    }
  };

  const updateSongInfo = () => {
    setSongInfo({
      currentTime: audioRef.current.currentTime,
      duration: audioRef.current.duration,
    });
  };

  const skipTrackHandler = (direction) => {
    // Implement skipping logic based on the song array
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSongHandler,
        handleSongSelect,
        songInfo,
        audioRef,
        updateSongInfo,
        skipTrackHandler,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

// Custom hook to use MusicPlayerContext
export const useMusicPlayer = () => {
  return useContext(MusicPlayerContext);
};


