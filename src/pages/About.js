import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import FaqAreaOne from "../components/FaqAreaOne";
import NavbarTwo from "../components/NavbarTwo";
// import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessTwo from "../components/WorkProcessTwo";
import FooterOne from "../components/FooterOne";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Work Process One */}
      <WorkProcessTwo />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
