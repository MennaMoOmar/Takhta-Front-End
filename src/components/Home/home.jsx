import React from "react";

import NavBar from "./navbar"
import HeroSection from "./herosection"
import Services from "./services"
import About from "./about"
import ParentFeedback from "./parentfeedback"
import Feedback from "./feedback"
import Footer from "./footer"

const Home = () => {
  return (
    <React.Fragment>
      <div style={{backgroundColor:"#F6FCFB"}}>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Services></Services>
        <About></About>
        <ParentFeedback></ParentFeedback>
        <Feedback></Feedback>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
