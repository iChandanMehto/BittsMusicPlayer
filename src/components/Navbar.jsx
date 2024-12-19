import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";



const Navbar = (prop) => {





  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className=' bg-gray-900 text-white'


      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}  
    >
      <List >

        {['Sign Up', 'Contact Us', 'Login', ].map((text, index) => (
          <ListItem  key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <  AccountCircleOutlinedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (


    <nav className="bg-slate-950 h-[75px] w-full fixed top-0 m-0 p-0   ">
      <div className='no-underline bg-slate-950'>

        <ul className='no-underline flex  bg-slate-950 text-white  justify-center md:justify-start gap-1  mr-5 items-center md:gap-10 list-none font-normal text-[19px] ml-[1%]  '>
          <li > <a className='h-40w-40 text-white' href="#"> <  React.Fragment>
            < FiMenu
            size={28}
              onClick={
                toggleDrawer("left", true)
              }
            />
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </React.Fragment></a> </li>

          <li className='text-white'> <a className='text-white' href="#">{prop.Home}</a></li>
          <li><a className='text-white' href="3"></a></li>
          {/* <li><a className='text-white' href="#">Contact us</a></li>  */}
          <li className='   text-royalblue   pl-[7px] w-[500px]  flex items-center text-[17px] bg-[#f5f5f5]  h-[37px] mb-[10px] mt-[20px] pr-[40px] rounded-[3px] shadow-[0_0_8px_#ddd] border-none outline-none bg-no-repeat" style="background-position: right 7px; background-size: 25px; '>
            < FiSearch color='black'  />
            <input className='focus:outline-none bg-transparent h-full border-none text-[1.10rem] w-full ml-[10px]  text-black' type="text" placeholder="Functionality coming soon! Stay tuned." ></input>
          </li>
        </ul>

      </div>


    </nav>


  )
}

export default Navbar