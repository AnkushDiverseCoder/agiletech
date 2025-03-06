import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NavbarTwo from "../components/NavbarTwo";
// import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";
import FooterOne from "../components/FooterOne";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Service;
