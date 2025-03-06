import React from "react";

const WorkProcessTwo = () => {
  return (
    <>
      {/*==================== Work Process Two start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>OUR SIMPLE PROCESS</h6>
            <h2 className='title'>
              Elevate <span>Your Brand</span> with Our Proven Strategy
            </h2>
          </div>
          <div className='row'>
            {/* Step 1: Market Research */}
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/9.svg' alt='Market Research' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 01</p>
                  <h5 className='mb-3'>Market Research</h5>
                  <p className='content'>
                    We analyze market trends, competitors, and audience insights
                    to craft a data-driven strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Campaign Development */}
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/10.svg' alt='Campaign Development' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 02</p>
                  <h5 className='mb-3'>Campaign Development</h5>
                  <p className='content'>
                    Our team creates engaging content, ad creatives, and SEO strategies
                    to enhance your brand presence.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Digital Execution */}
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/12.svg' alt='Digital Execution' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 03</p>
                  <h5 className='mb-3'>Digital Execution</h5>
                  <p className='content'>
                    We launch social media ads, SEO campaigns, and PPC strategies,
                    optimizing in real time for success.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Performance Analysis */}
            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/11.svg' alt='Performance Analysis' />
                </div>
                <div className='details'>
                  <p className='process-count'>Step 04</p>
                  <h5 className='mb-3'>Performance Analysis</h5>
                  <p className='content'>
                    We track campaign results, refine strategies, and scale high-performing
                    marketing efforts for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process Two end ====================*/}

    </>
  );
};

export default WorkProcessTwo;
