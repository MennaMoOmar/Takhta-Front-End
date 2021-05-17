import React from "react";

import NavBar from "./navbar"
import HeroSection from "./herosection"

const Home = () => {
  return (
    <React.Fragment>
      <div style={{backgroundColor:"#F6FCFB"}}>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </div>
    </React.Fragment>
  );
};

export default Home;
