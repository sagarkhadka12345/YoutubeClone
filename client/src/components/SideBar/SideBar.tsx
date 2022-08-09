import {
  FaCamera,
  FaClock,
  FaGamepad,
  FaHome,
  FaRegClock,
  FaRegCompass,
} from "react-icons/fa";
import {
  MdHistory,
  MdOutlineFeedback,
  MdOutlineHelp,
  MdOutlineReport,
  MdReport,
  MdSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";
import {
  RiGamepadLine,
  RiLiveLine,
  RiSettings2Line,
  RiTrophyLine,
  RiVideoLine,
} from "react-icons/ri";

import { BiLike } from "react-icons/bi";
import download from "../../Assets/Image/download.png";

import React from "react";
import { FiHelpCircle } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className=" absolute left-0 hidden" id="sideBar">
      <div className=" flex flex-col ">
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <FaHome className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">Home</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <FaRegCompass className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">Explore</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <FaCamera className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">Shorts</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8 mb-2">
          <MdSubscriptions className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">Subscriptions</div>
        </div>
        <hr />
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8 mt-2">
          <MdVideoLibrary className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">Library</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <MdHistory className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">History</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <RiVideoLine className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">Your Videos</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <FaRegClock className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">Watch Later</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8 mb-2">
          <BiLike className="mr-4 h-6 w-6 " />
          <div className="font cursor-pointer">Liked Videos</div>
        </div>
      </div>
      <div>
        <div className="text-gray-600 font-xl pl-8">SUBSCRIPTIONS</div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8 mt-2">
          <img src={download} className="w-5 h-5 mr-4 " />
          <div className="cursor-pointer">VOX</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <img src={download} className="w-5 h-5 mr-4 " />
          <div className="cursor-pointer">NEPAl</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <img src={download} className="w-5 h-5 mr-4 " />
          <div className="cursor-pointer">MSN</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8 mb-2">
          <img src={download} className="w-5 h-5 mr-4 " />
          <div className="cursor-pointer">PEWDIEPIE</div>
        </div>
      </div>
      <div>
        <div className="text-gray-600 font-xl pl-8">MORE FROM YOUTUBE</div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8 mt-2">
          <RiGamepadLine className="mr-4 h-6 w-6 " />
          <div className="cursor-pointer">Gaming</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <RiLiveLine className="mr-4 h-6 w-6 " />
          <div className="cursor-pointer">Live</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <RiTrophyLine className="mr-4 h-6 w-6 " />
          <div className="cursor-pointer">Sports</div>
        </div>
        <hr />
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <RiSettings2Line className="mr-4 h-6 w-6 " />
          <div className="cursor-pointer">Settings</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <MdOutlineReport className="mr-4 h-6 w-6 " />
          <div className="cursor-pointer">Report</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <FiHelpCircle className="mr-4 h-6 w-6 " />
          <div className="cursor-pointer">Help</div>
        </div>
        <div className="flex  py-2 hover:bg-gray-200 hover:font-medium pr-[8rem] pl-8">
          <MdOutlineFeedback className="mr-4 h-6 w-6 " />
          <div className="cursor-pointer">Send feedback</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
