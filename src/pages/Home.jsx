import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainIndex from "../components/MainIndex";
const Home = () => {
  return (
    <div>
      <Header showBorder={true} />
      <Banner />
      <MainIndex />
      <Footer marginTop={50} />
    </div>
  );
};

export default Home;
