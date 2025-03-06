import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NavbarTwo from "../components/NavbarTwo";
import ServiceDetailsArea from "../components/ServiceDetailsArea";
import FooterOne from "../components/FooterOne";

const ServiceDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarTwo />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service Details"} />

      {/* Service Details Area */}
      <ServiceDetailsArea />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServiceDetails;
