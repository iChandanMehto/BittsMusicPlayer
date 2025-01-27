// import React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// // import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';

// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { FiSearch } from "react-icons/fi";
// import { FiMenu } from "react-icons/fi";



const Navbar = (prop) => {







  return (


    <nav className="bg-slate-950 h-[75px] w-full fixed top-0   md:m-0 p-0  shadow-md items-center align-middle ">
      <div className='no-underline bg-slate-950 flex flex-row justify-between '>
        <ul className='no-underline flex  bg-slate-950 text-white  justify-center md:justify-start gap-1   items-center mr-5 md:gap-10 list-none font-normal text-[19px] ml-[1%]  '>
          {/* <li className='text-white'> <a className='text-white' href="#">{prop.Home}</a>Home</li> */}
          <li className='   text-royalblue  ml-3 md:ml-1.5  md:pl-[7px] w-[40vw] md:w-[500px]  flex items-center text-[17px] bg-[#f5f5f5]  h-[37px] mb-[10px] mt-[20px] pr-[40px] rounded-full shadow-[0_0_8px_#ddd] border-none outline-none bg-no-repeat" style="background-position: right 7px; background-size: 25px; '>
            < FiSearch color='black' className="ml-2"  />
            <input className='focus:outline-none bg-transparent h-full border-none text-[1.10rem] w-full ml-[10px]  text-black' type="text" placeholder="Functionality coming soon! Stay tuned." ></input>
          </li>
        </ul>
        <ul className="text-white flex flex-row gap-3  m-3 md:mr-3 items-center text-lg">
          <li><button>Sign in</button></li>
          <li className="bg-white text-black rounded-full md:py-1.5 md:px-4 md:font-bold font  shadow-[0_0_8px_#ddd] border-none outline-none bg-no-repeat px-1.5 py-1 "><button >Log In</button></li>
        </ul>

      </div>


    </nav>


  )
}

export default Navbar