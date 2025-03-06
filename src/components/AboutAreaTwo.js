import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 mb-4 mb-lg-0 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                <img
                  className='main-img'
                  src='assets/img/about/10.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  Elevating Brands with Cutting-Edge Digital Marketing
                </h2>
                <p className='content mb-4'>
                  We specialize in innovative digital marketing strategies that enhance
                  brand visibility, drive engagement, and accelerate business growth.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Data-Driven Marketing Strategies
                      </li>
                      <li>
                        <FaCheckCircle /> Optimized SEO & Content Marketing
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> ROI-Focused Paid Advertising
                      </li>
                      <li>
                        <FaCheckCircle /> Social Media Growth & Management
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                  Our team leverages advanced tools and industry insights to craft
                  personalized marketing campaigns that deliver measurable results.
                  Partner with us to transform your online presence and scale your business.
                </p>
                <Link className='btn btn-border-base' to='/about'>
                  Discover More <FaPlus />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;
