import  { useContext } from "react";
import img02 from './images/starboy.jpg';
import img04 from './images/choolu.jpg';
import img06 from './images/perfect.jpg';
import img08 from './images/tumho.jpg';
import img09 from './images/laboko.jpg';
import img10 from './images/Romantic.webp'; 
import img11 from './images/aaogeJabTum.jpg';
import img12 from './images/heat.jpg';
import img13 from './images/oneLove.jpg';
import img14 from './images/NBSPLV.jpg'
import img15 from './images/52Bars.jpg'
import HeatWaves from './music/HeatWaves.mp3';
import TumHo from './music/TumHo.mp3';
import Starboy from './music/starboy.mp3';
import LaboKo from './music/LaboKo.mp3';
import Choolo from './music/Choolo.mp3';
import Perfect from './music/Perfect.mp3';
import OnLove from './music/Onelove.mp3';
import TheLastDown from './music/TheLastDown.mp3'
import aaogejabtum from './music/aaogejabtum.mp3';
import Bars from  './music/Bars.mp3'
import BolNaHalkeHalke from './music/BolNaHalkeHalke.mp3'
import img16 from './images/Bolnahalke.jpg'
import Player from "./Player"; 

import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const Section = () => {
  const { handleSongSelect, currentSong } = useContext(MusicPlayerContext);

  const songs = [
    { title: 'Tum Ho', artist: 'Mohit Chauhan', src: TumHo, image: img08 },
    { title: 'Choolo', artist: 'The Local Train', src: Choolo, image: img04 },
    { title: 'Aaoge Jab Tum', artist: 'Rashid Khan', src: aaogejabtum, image: img11 },
    { title: 'Labon Ko', artist: 'Pritam, KK', src: LaboKo, image: img09 },
    { title: 'Bol Na Halke Halke', artist: 'Rahat Fateh Ali Khan', src:BolNaHalkeHalke, image: img16 },
    { title: '52 Bars', artist: 'Karan Aujla', src:Bars, image: img15 },
    { title: 'One Love', artist: 'Shubh', src: OnLove, image: img13 },
    { title: 'Heat Waves', artist: 'Glass Animals', src: HeatWaves, image: img12 },
    { title: 'Starboy', artist: 'Weekend', src: Starboy, image: img02 },
    { title: 'Perfect', artist: 'Ed Sheeran', src: Perfect, image: img06 },
    { title: 'The Last Soul Down', artist: 'NBSPLV', src:TheLastDown, image: img14 },
  ];

  return (
    <div>
      <section className="flex flex-col md:flex-row gap-1  md:mt-20 md:max-h-screen md:w-screen m-[4px] md:m-0">
        {/* Left Section: Poster and Music Player */}
        <div className="md:mr-[1vw]    w-full md:w-[30vw] h-full md:h-[500px] rounded-xl text-white bg-slate-950 border-gray-500 md:ml-2">
          <div className="flex flex-col items-center justify-center pt-10 md:pt-3 md:mt-14 ">
            {/* Display either current song's image or default poster */}
            <img
              className="rounded-md max-h-[200px] max-w-[200px] mt-10 md:mt-0"
              src={currentSong ? currentSong.image : img10} // Default image if no song selected
              width={200}
              height={200}
              alt={currentSong ? currentSong.title : 'Default Poster'}
            />
            <h2 className="title-font mt-5 sm:text-4xl text-3xl mb-4 font-medium">
              {currentSong ? currentSong.title : 'No Song Selected'} 
            </h2>
            <p className="md:mb-8 mb-3 leading-relaxed">
              {currentSong ? `by ${currentSong.artist}` : 'Please select a song'} {/* Default Artist */}
            </p>
          </div>
          <Player />
        </div>

        {/* Right Section: Songs List */}
        <div className="items-center md:h-[500px] w-full md:w-[69vw] rounded-xl justify-center md:grid md:grid-cols-5   grid grid-cols-2 md:gap-1 h-[400px] overflow-auto md:overflow-y-auto overflow-x-auto scrollbar scrollbar-thumb-[5px] scrollbar-track-slate text-white bg-slate-950 ">
          {songs.map((song, index) => (
            <div
              key={index}
              onClick={() => handleSongSelect(song)}
              className=" mb-24 mt-10 md:mt-12 md:ml-8 ml-4 mr-4 md:w-40 w-30 h-[100px] md:h-[100px] md:rounded-2xl rounded-xl cursor-pointer hover:bg-slate-800 "
            >
              <img src={song.image} className="rounded-md  " alt={song.title} />
              <h1 className="mt-3">{song.title}</h1>
              <p className="text-sm pb-10">{song.artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Section;
