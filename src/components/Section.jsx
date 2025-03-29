import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import songs from "../assets/songs"
import Player from "./Player";

import Img01 from "../assets/images/Romantic.webp"

const Section = () => {
  const { handleSongSelect, currentSong } = useContext(MusicPlayerContext);
/*
im editing and adding songs through useContext and all songs are listed in data folder.
*/
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-20 md:mt-20 md:max-h-screen md:w-screen m-[4px] md:m-0">
        {/* Left Section: Song Details */}
        <div className="border border-slate-900 w-full items-center justify-center md:w-[30vw] h-full md:h-[500px] rounded-2xl text-white bg-slate-950">
          <div className="flex flex-col items-center justify-center pt-10 md:pt-3 md:mt-14">
            <img
              className="rounded-lg md:rounded-md shadow-2xl max-h-[200px] max-w-[200px] mt-10 md:mt-0"
              src={currentSong ? currentSong.img :  Img01}
              width={200}
              height={200}
              alt={currentSong ? currentSong.title : 'Default Poster'}
            />
            <h2 className="title-font mt-5 sm:text-4xl text-3xl mb-4 font-medium">
              {currentSong ? currentSong.title : 'No Song Selected'}
            </h2>
            <p className="md:mb-8 mb-3 leading-relaxed">
              {currentSong ? `by ${currentSong.artist}` : 'Please select a song'}
            </p>
          </div>
          <Player />
        </div>

        {/* Right Section: Songs List */}
        <div className="items-center md:h-[500px] md:w-[68vw] rounded-2xl justify-center md:grid md:grid-cols-5 md:overflow-y-scroll scrollbar-none grid grid-cols-2 h-[400px] overflow-auto overflow-x-auto scrollbar scrollbar-thumb-[5px] scrollbar-track-slate text-white bg-slate-950 border border-slate-900">
          {songs.map((song) => (
            <div
              key={song.id}
              onClick={() => handleSongSelect(song)}
              className={`mb-24 mt-10 md:mt-12 md:mx-6 ml-4 mr-4 md:w-30 w-30 h-[100px] md:h-[100px] md:rounded-2xl rounded-xl cursor-pointer hover:bg-slate-800 ${
                currentSong?.id === song.id ? "bg-slate-800" : ""
              }`}
            >
            <img
                src={song.img}
                className="rounded-lg md:rounded-md transition-transform duration-300 hover:scale-110"
                alt={song.title}
            />
              <h1 className="mt-3">{song.title}</h1>
              <p className="text-sm mb-6 pb-10">{song.artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section;
