
import img02 from './images/starboy.jpg';
import img04 from './images/choolu.jpg';
import img06 from './images/perfect.jpg';
import img08 from './images/tumho.jpg';
import img09 from './images/laboko.jpg';
// i
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
// import { duration } from '@mui/material';



export const albumsData = [
    {   
        id:0,
        title: 'Tum Ho', artist: 'Mohit Chauhan', src: TumHo, image: img08 
    },
    {   
        id:1,
        title: 'Choolo', artist: 'The Local Train', src: Choolo, image: img04 
    },
    {   
        id:2,
        title: 'Aaoge Jab Tum', artist: 'Rashid Khan', src: aaogejabtum, image: img11
    },
    {   
        id:3,
        title: 'Labon Ko', artist: 'Pritam, KK', src: LaboKo, image: img09
    },
    {   
        id:4,
        title: 'Bol Na Halke Halke', artist: 'Rahat Fateh Ali Khan', src:BolNaHalkeHalke, image: img16
    },
    {   
        id:5,
        title: '52 Bars', artist: 'Karan Aujla', src:Bars, image: img15 
    },
    { 
        id:6,
        title: 'One Love', artist: 'Shubh', src: OnLove, image: img13
     },
     { 
        id:7,
        title: 'Heat Waves', artist: 'Glass Animals', src: HeatWaves, image: img12
     },
        {
            id:8,
             title: 'Starboy', artist: 'Weekend', src: Starboy, image: img02 
            },
            { 
                id:9,
                title: 'Perfect', artist: 'Ed Sheeran', src: Perfect, image: img06
             },      

             { 
               id:10, 
                title: 'The Last Soul Down', artist: 'NBSPLV', src:TheLastDown, image: img14
             },

]

export const songsData = [
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
    {
        id:4,
        title: 'Bol Na Halke Halke', artist: 'Rahat Fateh Ali Khan', src:BolNaHalkeHalke, image: img16,
        duration:"5:04"
    },
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
    id:9,
    title: 'The Last Soul Down', artist: 'NBSPLV', src:TheLastDown, image: img14,
    duration:"2:30"
},
]

export default songsData;