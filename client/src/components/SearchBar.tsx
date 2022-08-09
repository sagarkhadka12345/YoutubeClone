import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Input from "./Input/Input";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const SearchBar = () => {
  return (
    <div className="flex items-center mr-4 hover sm:w-full ">
      <Input
        className="h-10 w-full   p-2 border border-gray-400 mx-2 px-4 mr-[10px] hidden sm:flex"
        placeholder="Search"
      />
      <div className="h-5 w-5 flex justify-center items-center rounded-auto bg-gray-400">
        <FontAwesomeIcon
          icon={faSearch as IconProp}
          className="h-5 w-5  sm:border border-gray-400 p-[9px] bg-gray-200 rounded-xl sm:rounded-[0%]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
