import React from "react";
import thumbnail from "../Assets/Image/thumbnail.png";

const VideoCard = () => {
  return (
    <div className="absolute left-[20rem] w-[240px]">
      <div className="relative">
        <img src={thumbnail} />
        <div className="absolute right-1 bottom-1 bg-black text-white text-[.85rem] pl-2 pr-[.75rem]">
          vv:ll
        </div>
      </div>
      <div className="flex mt-[.75rem]">
        <div className="mr-2 w-16 ">
          <img src={thumbnail} className="w-8 h-8 rounded-full" />
        </div>
        <div>
          <div>title goes Here and It can be long as possible</div>
          <div>channelName</div>
          <div className="flex text-gray-600 text-center">
            Views view <span>.</span>
            <div>Time Ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
