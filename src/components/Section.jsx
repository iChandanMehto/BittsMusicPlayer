import  { useContext } from "react";
import img02 from './images/starboy.jpg';
import img04 from './images/choolu.jpg';
// import img06 from './images/perfect.jpg';
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
// import Perfect from './music/Perfect.mp3';
import OnLove from './music/Onelove.mp3';
import TheLastDown from './music/TheLastDown.mp3'
import aaogejabtum from './music/aaogejabtum.mp3';
import Bars from  './music/Bars.mp3'
// import BolNaHalkeHalke from './music/BolNaHalkeHalke.mp3'
import lifeisgoingon from './music/lifeisgoingon.mp3'
import img16 from './images/bolnaHalke.jpg'
import img17 from './images/comThrough.jpg'
import img18 from './images/reminder_cover.jpg'
import img19 from './images/lcdp.jpg'
import img20 from './images/popularimg.jpg'
import peaches from './music/peaches.mp3'
import img21 from './images/peachesimg.jpg'
import img22 from './images/bemine.jpg'
import bemine from './music/bemine.mp3'
import Reminder from './music/reminder_song.mp3'
import COME_THROUGH from './music/comeThrough.mp3'
import popular from './music/popular.mp3'
import Player from "./Player"; 

import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import { title } from "motion/react-client";
import { duration } from "@mui/material";


const Section = () => {
  const { handleSongSelect, currentSong } = useContext(MusicPlayerContext);

  const songs = [
    {
      id:0,
      title: 'Tum Ho', artist: 'Mohit Chauhan', src: TumHo, image: img08 ,
      duration:"5:18"
  },
  {
      id:1,
      title: 'Choolo', artist: 'The Local Train', src: Choolo, image: img04 ,
      duration:"3:53"
  },
  {
      id:2,
      title: 'Aaoge Jab Tum', artist: 'Rashid Khan', src: aaogejabtum, image: img11,
      duration:"5:52"
  },
  {
      id:3,
      title: 'Labon Ko', artist: 'Pritam, KK', src: LaboKo, image: img09,
      duration:"5:38"
  },
  // {
  //     id:4,
  //     title: 'Bol Na Halke Halke', artist: 'Rahat Fateh Ali Khan', src:BolNaHalkeHalke, image: img16,
  //     duration:"5:04"
  // },
  {
      id:5,
      title: '52 Bars', artist: 'Karan Aujla', src:Bars, image: img15 ,
      duration:"3:34"
  },
  {
      id:6,
      title: 'One Love', artist: 'Shubh', src: OnLove, image: img13,
      duration:"2:39"
  },
  {
    id:14,
    title: 'Be Mine', artist: 'Shubh', src:bemine, image: img22,
    duration:"2:27"
  },
  {
id:9,
title:'COME THROUGH ', artist :'Abdullah Maharvi & Talha Anjum' , src: COME_THROUGH, image : img17,
duration  : "3:16"
  },
  {
      id:7,
      title: 'Heat Waves', artist: 'Glass Animals', src: HeatWaves, image: img12,
      duration:"3:58"
  },
{
  id:8,
  title: 'Starboy', artist: 'Weekend', src: Starboy, image: img02 ,
  duration :"3:50"
},

{
  id:10,
  title:'Reminder', artist:'Weekend', src:Reminder, image:img18,
  duration:"3:38"
},
{
  id:11,
  title: 'Life Is Going On', artist: 'Cecilia Krull', src:lifeisgoingon, image: img19,
  duration:"3:34"
},
{
  id:12,
  title: 'Popular', artist: 'Weekend', src:popular, image: img20,
  duration:"3:34"
},
{
  id:13,
  title: 'Peaches', artist: 'Justin Beiber', src:peaches, image: img21,
  duration:"3:17"
},

]

  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center gap-2   md:gap-4 mt-20 md:mt-20 md:max-h-screen md:w-screen  m-[4px] md:m-0 ">
        <div className="  border border-slate-900 w-full items-center justify-center md:w-[30vw] h-full md:h-[500px] rounded-2xl text-white bg-slate-950   ">
          <div className="flex flex-col items-center justify-center pt-10 md:pt-3 md:mt-14 ">
            <img
              className="rounded-md shadow-2xl max-h-[200px] max-w-[200px] mt-10 md:mt-0"
              src={currentSong ? currentSong.image : img10} 
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
        <div className="items-center md:h-[500px]   md:w-[68vw] rounded-2xl justify-center  md:grid  md:grid-cols-5   md:overflow-y-scroll scrollbar-none grid grid-cols-2  h-[400px] overflow-auto  overflow-x-auto scrollbar scrollbar-thumb-[5px] scrollbar-track-slate text-white bg-slate-950  border border-slate-900">
          {songs.map((song, index) => (
            <div
              key={index}
              onClick={() => handleSongSelect(song)}
              className=" mb-24 mt-10 md:mt-12 md:mx-6 ml-4 mr-4 md:w-30 w-30 h-[100px] md:h-[100px] md:rounded-2xl rounded-xl cursor-pointer hover:bg-slate-800 "
            >
              <img src={song.image} className="rounded-md  " alt={song.title} />
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