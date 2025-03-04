import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import FaqAreaOne from "../components/FaqAreaOne";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
