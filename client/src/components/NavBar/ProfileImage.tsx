import React from "react";
import download from "./Assests/download.png";

const ProfileImage: React.FC = (): JSX.Element => {
  return (
    <div className="rounded-full w-7 h-7">
      <img src={download} />
    </div>
  );
};

export default ProfileImage;
