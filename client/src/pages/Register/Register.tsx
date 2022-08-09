import React, { useRef } from "react";
import { FaGoogle } from "react-icons/fa";

import PlaceHolderInput from "../../components/Input/PlaceHolderInput";

const Register = () => {
  const refs = useRef<HTMLDivElement | null>(null);
  const click = (event: any) => {
    refs.current?.classList.add("placeholder");
  };

  const handleCheckBoxClick = () => {
    document
      .querySelectorAll(".passwords")
      ?.forEach((value: any) =>
        value.type === "text"
          ? (value.type = "password")
          : (value.type = "text")
      );
  };

  return (
    <div className="w-screen h-[85vh]  flex justify-center align-center ">
      <div className="border border-gray-200 p-8  ">
        <div className="flex justify-start py-4">
          <FaGoogle />
        </div>
        <h2>Create Your Google Account</h2>
        <h3 className="py-4">to continue to Youtube</h3>
        <div className="flex justify-between">
          <PlaceHolderInput
            type="text"
            placeholder="Firstname"
            className="input border border-gray-400 px-2 py-[4px]"
          />
          <PlaceHolderInput
            type="text"
            placeholder="Lastname"
            className="input border border-gray-400 px-2 py-[4px]"
          />
        </div>
        <div className="pt-4">
          <PlaceHolderInput
            type="email"
            placeholder="Your email address"
            className="input border border-gray-400 px-2 py-[4px] w-full"
          />
        </div>
        <div className="text-[#5f6368] ">
          You'll need to confirm that this email belongs to you
        </div>
        <div className="text-[#174ea6] pt-2 pb-6">
          <a>Create a new Gmail Instead</a>
        </div>
        <div className="flex justify-between">
          <PlaceHolderInput
            type="password"
            placeholder="Password"
            className="input border border-gray-400 px-2 py-[4px] passwords"
          />
          <PlaceHolderInput
            type="password"
            placeholder="confirm"
            className="input border border-gray-400 px-2 py-[4px] passwords"
          />
        </div>
        <div className="text-[#5f6368] ">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </div>
        <div className="cursor-pointer flex items-center relative">
          <input
            type="checkbox"
            onClick={handleCheckBoxClick}
            className="h-[1.15rem] w-[full] mx-4 absolute"
          />
          <span className="ml-12 ">Show Password</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
