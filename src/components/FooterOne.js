import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
    {/* ================== Footer One Start ================== */}
<footer className='footer-area bg-black bg-cover'>
  <div className='footer-subscribe'>
    <div className='container'>
      <div
        className='footer-subscribe-inner bg-cover'
        style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
      >
        <div className='row'>
          <div className='col-lg-6'>
            <h2 className='mb-lg-0 mb-3'>Subscribe To Our Newsletter</h2>
          </div>
          <div className='col-lg-6 align-self-center text-lg-end'>
            <input type='text' placeholder='Your e-mail address' />
            <a className='btn btn-black border-radius-0' href='/'>
              Submit now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-3 col-md-6'>
        <div className='widget widget_about'>
          <div className='thumb'>
            <img src='assets/img/logo.png' alt='img' />
          </div>
          <div className='details'>
            <p>
              Melbourne is simply is dumiomy is text Lorem Ipsum is simply
            </p>
            <p className='mt-3'>
              <FaPhoneAlt /> (+888) 123 456 765
            </p>
            <p className='mt-2'>
              <FaEnvelope /> (+888) 123 456 765
            </p>
            <ul className='social-media'>
              <li>
                <a href='/'>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href='/'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href='/'>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href='/'>
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6'>
        <div className='widget widget_nav_menu'>
          <h4 className='widget-title'>Our Services</h4>
          <ul>
            <li>
              <Link to='/service'>
                <FaArrowRight /> UI Design
              </Link>
            </li>
            <li>
              <Link to='/service'>
                <FaArrowRight /> Web Design
              </Link>
            </li>
            <li>
              <Link to='/service'>
                <FaArrowRight /> Digital Marketing
              </Link>
            </li>
            <li>
              <Link to='/service'>
                <FaArrowRight /> Video Editing
              </Link>
            </li>
            <li>
              <Link to='/service'>
                <FaArrowRight /> PC Repairs
              </Link>
            </li>
            <li>
              <Link to='/service'>
                <FaArrowRight /> Web Development
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-lg-3 col-md-6'>
        <div className='widget widget_nav_menu'>
          <h4 className='widget-title fancy-heading'>Quick Links</h4>
          <ul>
            <li>
              <Link to='/' className='fancy-link'>
                <FaArrowRight /> Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='fancy-link'>
                <FaArrowRight /> About Us
              </Link>
            </li>
            <li>
              <Link to='/contact' className='fancy-link'>
                <FaArrowRight /> Contact Us
              </Link>
            </li>
            <li>
              <Link to='/services' className='fancy-link'>
                <FaArrowRight /> Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className='footer-bottom'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 align-self-center'>
          <p>
            ©{' '}
            <a
              href='https://illustricitymedia.in/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Illustricity Media
            </a>{' '}
            -{' '}
            <a
              href='https://www.linkedin.com/in/thakur-ankush'
              target='_blank'
              rel='noopener noreferrer'
            >
              T. Ankush
            </a>{' '}
            | All Rights Reserved
          </p>
        </div>
        <div className='col-md-6 text-lg-end'>
          <a href='/'>Terms &amp; Conditions</a>
          <a href='/'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* ================== Footer One End ================== */}

    </>
  );
};

export default FooterOne;
