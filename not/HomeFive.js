import React from "react";
import AboutAreaFive from "../src/components/AboutAreaFive";
import AboutAreaSix from "../src/components/AboutAreaSix";
import BannerFive from "../src/components/BannerFive";
import BlogAreaFive from "../src/components/BlogAreaFive";
import CaseStudyAreaTwo from "../src/components/CaseStudyAreaTwo";
import FooterFour from "../src/components/FooterFour";
import NavbarFour from "../src/components/NavbarFour";
import ServiceAreaFive from "../src/components/ServiceAreaFive";
import TeamAreaThree from "../src/components/TeamAreaThree";
import TestimonialFive from "../src/components/TestimonialFive";
import WorkProcessFour from "../src/components/WorkProcessFour";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Banner Five */}
      <BannerFive />

      {/* About Area Five */}
      <AboutAreaFive />

      {/* Service Area Five */}
      <ServiceAreaFive />

      {/* Case Study Area Two */}
      <CaseStudyAreaTwo />

      {/* About Area Six */}
      <AboutAreaSix />

      {/* Team Area Three */}
      <TeamAreaThree />

      {/* Work Process Four */}
      <WorkProcessFour />

      {/* Testimonial Five */}
      <TestimonialFive />

      {/* Blog Area Five */}
      <BlogAreaFive />

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default HomeFive;
