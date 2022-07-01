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
    <div className=" absolute left-0  ">
      <div className=" flex flex-col ">
        <div className="flex  py-2 hover:bg-gray-200 hover:font-bold pr-[8rem] pl-6">
          <FaHome className="mr-4 h-6 w-6 " />
          <div className="font ">Home</div>
        </div>
        <div>
          <FaRegCompass />
        </div>
        <div>
          <FaCamera />
        </div>
        <div>
          <MdSubscriptions />
        </div>
        <hr />
        <div>
          <MdVideoLibrary />
        </div>
        <div>
          <MdHistory />
        </div>
        <div>
          <RiVideoLine />
        </div>
        <div>
          <FaRegClock />
        </div>
        <div>
          <BiLike />
        </div>
      </div>
      <div>
        <div className="text-gray-600 font-xl">SUBSCRIPTIONS</div>
        <div className="flex items-center">
          <img src={download} className="w-5 h-5 mx-4 " />
          <div>VOX</div>
        </div>
        <div className="flex items-center">
          <img src={download} className="w-5 h-5 mx-4 " />
          <div>NEPAl</div>
        </div>
        <div className="flex items-center">
          <img src={download} className="w-5 h-5 mx-4 " />
          <div>MSN</div>
        </div>
        <div className="flex items-center">
          <img src={download} className="w-5 h-5 mx-4 " />
          <div>PEWDIEPIE</div>
        </div>
      </div>
      <div>
        <div className="text-gray-600 font-xl">MORE FROM YOUTUBE</div>
        <div className="">
          <RiGamepadLine />
          <div>Gaming</div>
        </div>
        <div className="">
          <RiLiveLine />
          <div>Live</div>
        </div>
        <div className="">
          <RiTrophyLine />
          <div>Sports</div>
        </div>
        <hr />
        <div className="">
          <RiSettings2Line />
          <div>Settings</div>
        </div>
        <div className="">
          <MdOutlineReport />
          <div>Report</div>
        </div>
        <div className="">
          <FiHelpCircle />
          <div>Help</div>
        </div>
        <div className="">
          <MdOutlineFeedback />
          <div>Send feedback</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
