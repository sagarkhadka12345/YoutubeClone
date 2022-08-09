import React, { useState } from "react";

const Category: React.FC = (): JSX.Element => {
  const categories = [
    "All",
    "JavaScript",
    "React",
    "MongoDB",
    "Node.js",
    "Angular",
    "Express.js",
  ];
  const [category, setCategory] = useState("All");
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCategory((e.target as HTMLDivElement).innerText);
  };
  return (
    <div className="flex justify-around">
      {categories.map((value, index) => (
        <div
          onClick={handleClick}
          className={
            category === value
              ? "cursor-pointer p-2 m-1 mb-4 px-4 rounded-[16px] bg-black  text-white"
              : "cursor-pointer p-2 m-1 mb-4 px-4 rounded-[16px] "
          }
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Category;
