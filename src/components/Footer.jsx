

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer  className="  h-full md:h-[165px] rounded-t-2xl md:rounded-xl  text-white bg-slate-950 md:mt-2  border-gray-500 md:ml-2 md:mr-2 mt-[4px] mx-[4px] ">
            <div className="mx-auto mr-5 max-w-screen ml-5 md:p-4 p-2 md:py-6 py-4 pr-5 lg:py-8 bottom-0">
                <div className="md:flex  flex flex-col md:justify-between">
               
                    <div className=" grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="md:mb-4 mb-2 ">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6  text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="md:mb-4 mb-2">
                                    <a
                                        href="https://github.com/Iamchandanmehto"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="md:mb-4 mb-2">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
               
            </div>
        </footer>
    );
}
