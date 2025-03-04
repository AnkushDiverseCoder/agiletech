import React from "react";
import AboutAreaOne from "../src/components/AboutAreaOne";
import BannerOne from "../src/components/BannerOne";
import BlogAreaOne from "../src/components/BlogAreaOne";
import CaseStudyAreaOne from "../src/components/CaseStudyAreaOne";
import ContactAreaOne from "../src/components/ContactAreaOne";
import CounterAreaOne from "../src/components/CounterAreaOne";
import FaqAreaOne from "../src/components/FaqAreaOne";
import FooterOne from "../src/components/FooterOne";
import NavBar from "../src/components/NavBar";
import PricingAreaOne from "../src/components/PricingAreaOne";
import ServiceAreaOne from "../src/components/ServiceAreaOne";
import TeamAreaOne from "../src/components/TeamAreaOne";
import WorkProcessOne from "../src/components/WorkProcessOne";

const HomeOne = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Banner One */}
      <BannerOne />

      {/* About Area One */}
      <AboutAreaOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Case Study Area One */}
      <CaseStudyAreaOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Blog Area One */}
      <BlogAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default HomeOne;
