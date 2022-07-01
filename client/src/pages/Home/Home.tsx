import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <SideBar />
    </>
  );
};

export default Home;
