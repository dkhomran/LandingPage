import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {assets} from "../assets/assets";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over 100 TND Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-white text-end mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+21628085788">
                  (+216) 28085788
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">
                  ESHOP.
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={assets.compare} alt="compare" />
                    <p className="mb-0">compare <br /> products</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={assets.wishlist} alt="wishlist" />
                    <p className="mb-0">Favourite <br /> wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={assets.user} alt="user" />
                    <p className="mb-0">Log in <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={assets.cart} alt="cart" />
                    <div className="d-flex flex-column gap-10"> 
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">TND 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle d-flex align-items-center gap-10" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={assets.menu} alt="menu" />
                    <span> Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                  </ul>
                </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/">OUR STORE</NavLink>
                    <NavLink to="/">BLOGS</NavLink>
                    <NavLink to="/">CONTACT</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
