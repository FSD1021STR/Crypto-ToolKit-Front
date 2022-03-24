import "./home.css";
import React from "react";
import IntroSection from "../../components/introSection/introSection";
import TopListSection from "../../components/topListSection/topListSection";

const Home = () => {
  return (
    <div className="home">
      <IntroSection />
      <TopListSection />
    </div>
  );
};

export default Home;
