import React from "react";

import NavBar from "./navbar"
import HeroSection from "./herosection"
import Services from "./services"
import Loading from "../loading"

const Home = () => {
  return (
    <React.Fragment>
      <div style={{backgroundColor:"#F6FCFB"}}>
        <Loading></Loading>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Services></Services>
      </div>
    </React.Fragment>
  );
};

export default Home;
