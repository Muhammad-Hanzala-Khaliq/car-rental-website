import React, { useState } from 'react';
import './Navbar.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close navbar after link click
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container">
            <a className="navbar-brand fs-5" style={{ color: '#000000' }} href="#">
              Luxury Cars
            </a>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              onClick={toggleNav}
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`sidebar offcanvas offcanvas-end${isNavOpen ? ' show' : ''}`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header text-white border-bottom">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                <button
                  type="button"
                  style={{ color: 'white' }}
                  className="btn-close  shadow-none"
                  onClick={toggleNav}
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                <ul className="navbar-nav justify-content-lg-end  align-items-center fs-5 flex-grow-1 pe-3">
                  <li className="nav-item mx-3">
                    <Link
                      className="nav-link"
                      style={{ color: '#000000' }}
                      aria-current="page"
                      to="/Home"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      className="nav-link"
                      style={{ color: '#000000' }}
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      className="nav-link"
                      style={{ color: '#000000' }}
                      to="service"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      Service
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      className="nav-link"
                      style={{ color: '#000000' }}
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link
                      className="nav-link"
                      style={{ color: '#000000' }}
                      to="/sign"
                      onClick={handleLinkClick}
                    >
                      <FaRegUserCircle
                        style={{ marginTop: '-6px', color: '#F1BC00', marginRight: '8px', fontSize: '22px' }}
                      />{' '}
                      Sign Up
                    </Link>
                  </li>
                </ul>
                {/* <!-- Login Sign up --> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
