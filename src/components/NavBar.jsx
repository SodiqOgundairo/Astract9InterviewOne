import React from "react";
import logo from "../assets/img/logo.png";

const NavBar = () => {
  return (
    <>
    
<nav className="bg-background px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <p   className="flex items-center">
      <img src={logo} className="h-6 mr-3 sm:h-9" alt="Hernalytics Logo" />
  </p>
  <div className="flex md:order-2">

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 md:mx-10 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-background ">
      <li>
        <p   className="block py-2 pr-3 pl-4 text-white font-[14px] hover:text-theme md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">ABOUT US</p>
      </li>
      <li>
        <p   className="block py-2 px-5 text-white font-[14px] hover:text-theme md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">OUR COMMUNITIES</p>
      </li>
      <li>
        <p   className="block py-2 px-5 text-white font-[14px] hover:text-theme md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">ELECTION DATA</p>
      </li>
      <li>
        <p   className="block py-2 px-5 text-white font-[14px] hover:text-theme md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">E-BUDDY</p>
      </li>
      <li>
        <p   className="block py-2 px-5 text-white font-[14px] hover:text-theme md:bg-transparent md:text-white md:p-0 dark:text-white" aria-current="page">FAQ'S</p>
      </li>
    </ul>
    <div className='ml-10 '>

    <button type="button" className="text-white  hover:bg-background hover:border-theme hover:focus:ring-4 hover:focus:outline-none hover:focus:ring-theme font-medium rounded-[4px] text-sm px-[25px] py-[8px] text-center mr-3 md:mr-0">LOGIN</button>
      <button type="button" className="text-black bg-theme hover:bg-background border-theme focus:outline-none focus:ring-theme font-medium rounded-[4px] text-sm px-[25px] py-[8px] text-center mr-3 md:mr-0">SIGN UP</button>
    </div>
  </div>
  </div>
</nav>

    </>
  );
};

export default NavBar;
