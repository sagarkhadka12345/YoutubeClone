import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "./Input";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const SearchBar = () => {
  return (
    <div className="flex items-center mr-4">
      <Input
        className="h-10 w-[30rem] p-2 border border-gray-400 mx-2 px-4"
        placeholder="Search"
      />
      <div className="h-5 w-5 flex justify-center items-center rounded-auto bg-gray-400">
        <FontAwesomeIcon
          icon={faSearch as unknown as IconProp}
          className="h-5 w-5 border border-gray-400 p-[9px] border-l-0 bg-gray-200 "
        />
      </div>
    </div>
  );
};

export default SearchBar;
