import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaTwo = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>OUR SERVICES</h6>
                <h2 className='title'>
                  Elevate Your <span>Brand</span> with Expert Digital Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* Social Media Marketing */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/social-media.png' alt='Social Media Marketing' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-social.png' alt='Social Media Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Social Media Marketing</Link>
                  </h5>
                  <p>Boost engagement and build a strong online presence with data-driven social media strategies.</p>
                </div>
              </div>
            </div>

            {/* SEO */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/seo.png' alt='SEO' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-seo.png' alt='SEO Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Search Engine Optimization</Link>
                  </h5>
                  <p>Improve search rankings and drive organic traffic with expert SEO strategies.</p>
                </div>
              </div>
            </div>

            {/* Advertisement Management */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/ads-management.png' alt='Advertisement Management' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-ads.png' alt='Ads Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Advertisement Management</Link>
                  </h5>
                  <p>Maximize ROI with targeted ad campaigns across Google, Facebook, and more.</p>
                </div>
              </div>
            </div>

            {/* Website Development */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/web-dev.png' alt='Website Development' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-web.png' alt='Web Dev Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Website Development</Link>
                  </h5>
                  <p>Create high-performing, user-friendly websites that convert visitors into customers.</p>
                </div>
              </div>
            </div>

            {/* UI/UX */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/uiux.png' alt='UI/UX Design' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-uiux.png' alt='UI/UX Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>UI/UX Design</Link>
                  </h5>
                  <p>Enhance user experience with sleek, intuitive, and engaging UI/UX designs.</p>
                </div>
              </div>
            </div>

            {/* Content Creation */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/content.png' alt='Content Creation' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-content.png' alt='Content Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Content Creation</Link>
                  </h5>
                  <p>Engage your audience with high-quality content tailored to your brand’s voice.</p>
                </div>
              </div>
            </div>

            {/* Application Development */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/app-dev.png' alt='Application Development' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-app.png' alt='App Dev Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Application Development</Link>
                  </h5>
                  <p>Develop powerful, scalable mobile and web applications that drive business growth.</p>
                </div>
              </div>
            </div>

            {/* Graphic Designing */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/graphic.png' alt='Graphic Designing' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-graphic.png' alt='Graphic Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Graphic Designing</Link>
                  </h5>
                  <p>Stand out with visually stunning graphics that align with your brand identity.</p>
                </div>
              </div>
            </div>

            {/* Branding */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/branding.png' alt='Branding' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-branding.png' alt='Branding Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Branding</Link>
                  </h5>
                  <p>Build a strong, memorable brand that resonates with your target audience.</p>
                </div>
              </div>
            </div>

            {/* Artist Management */}
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/artist-management.png' alt='Artist Management' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/icon-artist.png' alt='Artist Management Icon' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Artist Management</Link>
                  </h5>
                  <p>Strategic management and marketing for artists to grow their brand and reach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>

  );
};

export default ServiceAreaTwo;
