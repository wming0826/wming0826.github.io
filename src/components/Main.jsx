// eslint-disable-next-line no-unused-vars
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center"
        src="/Ming_old_ps_2_169_3.jpg"
        loading="lazy"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="lg:max-w-[1000px] max-w-[700px] m-auto h-full w-full flex flex-col justify-center md:items-end items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I&apos;m Ming
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I&apos;m a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Designer",
                2000,
                "Tech Enthusiast",
                2000,
                "Photographer",
                2000,
                "Traveler",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "7px",
                display: "inline-block",
              }}
            />
          </h2>
          <div className="flex justify-between p-6 max-w-[200px] w-full">
            <a href="https://www.facebook.com/ignatius.wong.7739">
              <FaFacebookF
                size={20}
                className="cursor-pointer hover:scale-125"
              />
            </a>
            <a href="https://www.instagram.com/w.c.m._826/">
              <FaInstagram
                size={20}
                className="cursor-pointer hover:scale-125"
              />
            </a>
            <a href="https://www.linkedin.com/in/chak-ming-wong-b5b040221/">
              <FaLinkedinIn
                size={20}
                className="cursor-pointer hover:scale-125"
              />
            </a>
            <a href="https://github.com/wming0826">
              <FaGithub size={20} className="cursor-pointer hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
