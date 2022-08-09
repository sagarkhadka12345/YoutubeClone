import React from "react";
import Category from "../../components/Category/Category";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import VideoCard from "../../components/VideoCard";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Category />
      <VideoCard />
    </>
  );
};

export default Home;
