import "./App.css";
import React from "react";
import BlockMenu from "./components/BlockMenu/BlockMenu";
import Footer from "./components/Footer/Footer";
import HeadMenu from "./components/HeadMenu/HeadMenu";
import GridSoftwareVisibility from "./components/GridSoftwareVisibility/GridSoftwareVisibility";
import FullScreenSlider from "./components/FullScreenSliderx3/FullScreenSlider";
import OurVision from "./components/OurVision/OurVision";
import AwesomeBuilds from "./components/AwesomeBuilds/AwesomeBuilds";
import Blogs from "./components/Blogs/Blogs";
import SafetyBanner from "./components/SafetyBanner/SafetyBanner";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import OurOfferings from "./components/OurOfferings/OurOfferings";
import NavBar from "./components/NavBar/NavBar";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <BlockMenu />
      <HeadMenu />
      <GridSoftwareVisibility />
      <FullScreenSlider />
      <OurVision />
      <OurOfferings />
      <WorkProcess />
      <AwesomeBuilds />
      <Blogs />
      {/* <ContactUs /> */}
      <SafetyBanner />
      {/* <OurCollab /> */}
      {/* <Banner /> */}
      <Footer />
    </div>
  );
}

export default Home;
