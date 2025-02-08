

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer  className="  md:h-[15vh] w-[99vw] rounded-t-2xl overflow-hidden p-4 md:rounded-2xl  border border-slate-900  text-white bg-slate-950 md:mt-2   md:ml-2 md:mr-2 mt-[4px] mx-[4px] ">
          <div className="sm:flex flex flex-col  sm:items-center sm:justify-between">
            {/* <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a> */}
            <ul class="flex flex-wrap justify-center items-center mb-6 text-sm md:text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://chandanmehto.vercel.app/" className  ="  gap-4 m-4 hover:underline-none me-4 md:me-4  gap-4 m-4">About</a>
                </li>
                <li>
                    <a href="#" className  ="   gap-4 m-4 hover:underline-none me-4 md:me-4">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className  ="  gap-4 m-4 hover:underline-none me-4 md:me-4">Created by</a>
                </li>
                {/* <li>
                    <a href="#" className  ="  gap-4 m-4 hover:underline">Contact</a>
                </li> */}
            </ul>
        </div>
        <hr class="my-2 border-gray-200 sm:mx-auto dark:border-slate-900 lg:my-8" />
        {/* <span class="block text-center justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span> */}
        </footer>
    );
}
