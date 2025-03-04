import React from "react";
import AboutAreaThree from "../src/components/AboutAreaThree";
import BannerThree from "../src/components/BannerThree";
import BlogAreaThree from "../src/components/BlogAreaThree";
import ContactAreaThree from "../src/components/ContactAreaThree";
import CounterAreaThree from "../src/components/CounterAreaThree";
import FooterTwo from "../src/components/FooterTwo";
import NavBar from "../src/components/NavBar";
import PricingAreaThree from "../src/components/PricingAreaThree";
import ServiceAreaThree from "../src/components/ServiceAreaThree";
import TestimonialTwo from "../src/components/TestimonialTwo";
import WorkProcessThree from "../src/components/WorkProcessThree";

const HomeThree = () => {
  return (
    <>
      {/* Navigation Bar*/}
      <NavBar />

      {/* Banner Three*/}
      <BannerThree />

      {/* Service Area Three */}
      <ServiceAreaThree />

      {/* About Area Three */}
      <AboutAreaThree />

      {/* Pricing Area Three */}
      <PricingAreaThree />

      {/* Contact Area Three */}
      <ContactAreaThree />

      {/* Testimonial Two */}
      <TestimonialTwo />

      {/* WorkProcess Three */}
      <WorkProcessThree />

      {/* Counter Area Three */}
      <CounterAreaThree />

      {/* Blog Area Three */}
      <BlogAreaThree />

      {/* Footer Two */}
      <FooterTwo />
    </>
  );
};

export default HomeThree;
