// import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { AiFillDiscord } from "react-icons/ai";
import {Link, } from "react-router-dom"
// NavLink => i will gonna use navlink soon  in navigating user to login form and home section and hero section and its help to navigatethourgh user.

export default function Footer() {
    return (
        <footer className="md:h-[15vh] md:w-[99vw] rounded-t-2xl overflow-hidden p-4 md:rounded-2xl border border-slate-900 text-white bg-slate-950 md:mt-2 md:ml-2 md:mr-2 mt-[4px] mx-[4px] ">
            <div className="sm:flex flex flex-col items-center sm:items-center sm:justify-center">
            <ul className="flex space-x-5   text-2xl md:text-3xl  md:blockw-1/5  text-white">
     <Link
     to={'https://x.com/ichandanmehto'} 
     >
     <li>< FaSquareXTwitter/></li>
     </Link>


     <Link to={'https://www.linkedin.com/in/chandanmehto/'}>
     <li><FaLinkedin/></li>
     </Link>

<Link to={'https://github.com/Iamchandanmehto'}>
<li><FaGithubSquare/></li>
</Link>
  
          </ul>
     
                <ul className="flex flex-wrap justify-center items-center mb-6 text-sm my-6  md:text-md font-medium text-gray-500 sm:mb-0  dark:text-gray-400">
                    <li>
                        <Link to={'https://github.com/Iamchandanmehto/BittsMusicPlayer'}
                         className="gap-4  hover:text-gray-200  mx-4 hover:underline-none me-4 md:me-4"
                        >
                                      About
                        </Link>
                    </li>
                    <li>
                        <Link
                        to={'/Home'}
                        className="gap-4 mx-4  hover:text-gray-200  hover:underline-none me-4 md:me-4"
                        >
                                      Privacy Policy
                        </Link>
                       
                    </li>
                    <li>
                        <Link
                        to={'https://github.com/Iamchandanmehto'}
                        className="gap-4 mx-4 hover:text-gray-200 hover:underline-none me-4 md:me-4"
                        >
                               Created By
                        </Link>

                     
                    </li>
                </ul>
            </div>
       
        </footer>
    );
}

