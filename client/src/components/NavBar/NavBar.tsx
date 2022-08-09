import React from "react";
import Hamburger from "../Hamburger";
import SearchBar from "../SearchBar";
import microphone from "./Assests/microphone.png";

import Box from "./Box";
import ProfileImage from "./ProfileImage";
import { FaBell, FaVideo, FaYoutube } from "react-icons/fa";

const NavBar: React.FC = (): JSX.Element => {
  return (
    <nav className="flex items-center my-2 ">
      <div className="mx-4 flex justify-between ">
        <Hamburger />

        <FaYoutube className="w-7 h-7 mx-4" />
      </div>
      <div className="m-auto flex items-center w-[50%]">
        <SearchBar />
        <img src={microphone} className="w-5 h-5 mx-4 " />
      </div>
      <div className="flex items-center px-8 justify-around ">
        <FaVideo className="mx-4 h-7 w-7" />
        <Box />
        <FaBell className="w-5 h-5 mr-8" />
        <ProfileImage />
      </div>
    </nav>
  );
};

export default NavBar;
