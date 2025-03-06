import React, { createContext, useState, useRef, useContext, useEffect } from "react";

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  const audioRef = useRef(new Audio());

  
  const updateSongInfo = () => {
    setSongInfo({
      currentTime: audioRef.current.currentTime,
      duration: audioRef.current.duration,
    });
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    audioElement.addEventListener("timeupdate", updateSongInfo);

    return () => {
      audioElement.removeEventListener("timeupdate", updateSongInfo);
    };
  }, []);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setSongInfo({
        currentTime: audioRef.current.currentTime,
        duration: audioRef.current.duration,
      });
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

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

  const skipTrackHandler = (direction) => {
  
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

export const useMusicPlayer = () => {
  return useContext(MusicPlayerContext);
};
