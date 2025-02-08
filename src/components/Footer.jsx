// import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="md:h-[15vh] md:w-[99vw] rounded-t-2xl overflow-hidden p-4 md:rounded-2xl border border-slate-900 text-white bg-slate-950 md:mt-2 md:ml-2 md:mr-2 mt-[4px] mx-[4px] ">
            <div className="sm:flex flex flex-col sm:items-center sm:justify-between">
                <ul className="flex flex-wrap justify-center items-center mb-6 text-sm md:text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://chandanmehto.vercel.app/" className="gap-4 m-4 hover:underline-none me-4 md:me-4">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="gap-4 m-4 hover:underline-none me-4 md:me-4">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="gap-4 m-4 hover:underline-none me-4 md:me-4">
                            Created by
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-2 sm:mx-auto border-slate-900 lg:my-8" />
        </footer>
    );
}

