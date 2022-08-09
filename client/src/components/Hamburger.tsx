import React from "react";

const handleClick = () => {
  document.getElementById("sideBar")?.classList.toggle("hidden");
};

const Hamburger = () => {
  return (
    <div className="mx-4 cursor-pointer" onClick={handleClick}>
      <div className="border border-b-black m-[6px] w-6"></div>
      <div className="border border-b-black m-[6px] w-6"></div>
      <div className="border border-b-black m-[6px] w-6"></div>
    </div>
  );
};

export default Hamburger;
