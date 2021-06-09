import React from "react";

import NavBar from "./navbar"
import HeroSection from "./herosection"
import Services from "./services"
import About from "./about"

const Home = () => {
  return (
    <React.Fragment>
      <div style={{backgroundColor:"#F6FCFB"}}>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Services></Services>
        <About></About>
      </div>
    </React.Fragment>
  );
};

export default Home;
