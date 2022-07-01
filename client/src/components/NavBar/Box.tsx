import React from "react";

const Box: React.FC = (): JSX.Element => {
  return (
    <div className=" border-collapse mx-6">
      <div className="flex">
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 mx-[0.125rem]"></div>
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 mx-[.125rem]"></div>
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 mx-[.125rem]"></div>
      </div>
      <div className="flex">
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 m-[.125rem]"></div>
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 m-[.125rem]"></div>
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 m-[.125rem]"></div>
      </div>
      <div className="flex">
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 mx-[0.125rem]"></div>
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 mx-[.125rem]"></div>
        <div className="p-[1.5px] h-[2px] w-[2px]  border border-gray-600 mx-[.125rem]"></div>
      </div>
    </div>
  );
};

export default Box;
