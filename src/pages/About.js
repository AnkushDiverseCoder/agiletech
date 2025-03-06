import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import FaqAreaOne from "../components/FaqAreaOne";
import FooterTwo from "../components/FooterTwo";
import NavbarTwo from "../components/NavbarTwo";
// import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessTwo from "../components/WorkProcessTwo";

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
      <FooterTwo />
    </>
  );
};

export default About;
