// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
//import { BsPerson } from "react-icons/bs";
import { MdOutlineViewTimeline } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
// import { IoImageOutline } from "react-icons/io5";

const Sidenav = () => {
  const [nav, setNav] = useState(false); //show mobile nav
  const handleNav = () => {
    setNav(!nav);
    //console.log(nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden scale-125 hover:scale-150"
      />
      {nav ? (
        <div
          onClick={handleNav}
          className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden"
        >
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:scale-110 ease-in duration-200"
          >
            <MdOutlineViewTimeline size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#project"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:scale-110 ease-in duration-200"
          >
            <HiOutlineSquares2X2 size={20} />
            <span className="pl-4">Project</span>
          </a>
          {/* <a
            onClick={handleNav}
            href="#gallery"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:scale-110 ease-in duration-200"
          >
            <IoImageOutline size={20} />
            <span className="pl-4">Gallery</span>
          </a> */}
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col ml-5 py-4 px-1">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-stone-100 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:rounded-2xl hover:scale-110 transition-all ease-linear duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-stone-100 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:rounded-2xl hover:scale-110 transition-all ease-linear duration-200"
          >
            <MdOutlineViewTimeline size={20} />
          </a>
          <a
            href="#project"
            className="rounded-full shadow-lg bg-stone-100 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:rounded-2xl hover:scale-110 transition-all ease-linear duration-200"
          >
            <HiOutlineSquares2X2 size={20} />
          </a>
          {/* <a
            href="#gallery"
            className="rounded-full shadow-lg bg-stone-100 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:rounded-2xl hover:scale-110 transition-all ease-linear duration-200"
          >
            <IoImageOutline size={20} />
          </a> */}
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-stone-100 m-2 p-4 cursor-pointer hover:bg-gray-800 hover:text-white hover:rounded-2xl hover:scale-110 transition-all ease-linear duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
