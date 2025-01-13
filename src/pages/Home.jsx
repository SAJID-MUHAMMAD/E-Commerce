import React from "react";
import Banner from "../components/home-page/Banner";
import Browse from "../components/home-page/Browse";
import OurProduct from "../components/home-page/OurProduct";
import Explore from "../components/home-page/Explore";
import SetupPart from "../components/home-page/SetupPart";

const Home = () => {
  return (
    <>
      <Banner />
      <Browse />
      <OurProduct />
      <Explore />
      <SetupPart />
    </>
  );
};

export default Home;
