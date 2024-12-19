import { useContext } from "react";
import { MusicPlayerContext } from "./MusicPlayerContext";

export const useMusicPlayer = () => {
  return useContext(MusicPlayerContext);
};

