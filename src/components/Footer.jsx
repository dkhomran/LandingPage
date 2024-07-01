import React from 'react'
import {assets} from "../assets/assets";
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={assets.newsletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white'>Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 19 Annozha, Ariana <br />
                  PinCode: 2080
                </address>
                <a href="tel:+21628085788" className="mt-2 text-white d-block mb-2">(+216) 28085788</a>
                <a href="mailto:+21628085788" className="mt-2 text-white d-block mb-2">Dekhil22omran@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-15">
                  <a className='text-white fs-4' href="linkedin.com"><BsLinkedin/></a>
                  <a className='text-white fs-4' href="facebook.com"><BsFacebook/></a>
                  <a className='text-white fs-4' href="instagram.com"><BsInstagram/></a>
                  <a className='text-white fs-4' href="github.com"><BsGithub/></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white'>Informations</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="#" className="text-white py-2  mb-1">Privacy Policy</Link>
                <Link to="#" className="text-white py-2  mb-1">Refund Policy</Link>
                <Link to="#" className="text-white py-2  mb-1">Shipping Policy</Link>
                <Link to="#" className="text-white py-2  mb-1">Terms & conditions</Link>
                <Link to="#" className="text-white py-2  mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="#" className="text-white py-2  mb-1">About Us</Link>
                <Link to="#" className="text-white py-2  mb-1">Faq</Link>
                <Link to="#" className="text-white py-2  mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white'>Quick links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="#" className="text-white py-2  mb-1">Laptops</Link>
                <Link to="#" className="text-white py-2  mb-1">Headphones</Link>
                <Link to="#" className="text-white py-2  mb-1">Tablets</Link>
                <Link to="#" className="text-white py-2  mb-1">Watchs</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear} Powered by Dekhil Omran </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer