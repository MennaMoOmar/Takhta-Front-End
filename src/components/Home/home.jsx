import React from "react";

import NavBar from "./navbar"
import HeroSection from "./herosection"
import Services from "./services"
import Error from "../error"

const Home = () => {
  return (
    <React.Fragment>
      <div style={{backgroundColor:"#F6FCFB"}}>
        <Error></Error>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Services></Services>
      </div>
    </React.Fragment>
  );
};

export default Home;
