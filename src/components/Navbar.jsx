

// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { FiSearch } from "react-icons/fi";
// import { FiMenu } from "react-icons/fi";



const Navbar = () => {

  return (
    <nav className="bg-slate-950   h-[75px] w-full fixed top-0   mb-5 rounded-b-2xl   md:rounded-none  md:m-0 p-0 border border-slate-900 shadow-md items-center align-middle ">
      <div className='no-underline rounded-3xl bg-slate-950 flex flex-row justify-between mt-1  align-middle text-center'>
        <ul className='no-underline flex  bg-slate-950 text-white  justify-center text-center md:justify-start gap-1   items-center mr-5 md:gap-10 list-none font-normal text-[19px] ml-[1%]  '>
          {/* <li className='text-white'> <a className='text-white' href="#">{prop.Home}</a>Home</li> */}
          <li className='   text-royalblue  ml-3 md:ml-1.5 text-center  md:pl-[7px] w-[40vw] md:w-[29vw]  flex items-center text-[17px] bg-[#f5f5f5]  h-[37px] pr-[40px] rounded-full shadow-[0_0_8px_#ddd] border-none outline-none bg-no-repeat" style="background-position: right 7px; background-size: 25px; '>
            < FiSearch color='black' className="ml-2"  />
            <input className='focus:outline-none bg-transparent h-full border-none text-[1.10rem] w-full ml-[10px]  text-sm md:text-lg text-black' type="text" placeholder="Functionality coming soon! Stay tuned." ></input>
          </li>
        </ul>
        <ul className=" text-white flex flex-row gap-3   text-center m-3 md:mr-3 items-center  text-sm md:text-lg">
          <li><button>Sign in</button></li>
          <li className="bg-white  text-sm md:text-lg py-2 mx-0.5 text-black rounded-full md:py-1.5 md:px-4 md:font-medium  shadow-[0_0_8px_#ddd] border-none outline-none bg-no-repeat px-3 "><button >Log In</button></li>
        </ul>

      </div>


    </nav>


  )
}

export default Navbar