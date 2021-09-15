import React from 'react';
import header from '../images/header.png';
import FacebookIcon from '../images/facebookIcon.png';
import InstaIcon from '../images/insta-Icon.png';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import '../../node_modules/bootstrap/scss/bootstrap.scss';

import '../styles/style.scss';
import { FacebookLink, InstagramLink } from './LinkReference';

const HeaderNav = () => {
  return (
    <div>
      <div className="navHeader">
        <img
          className="headerImg"
          src={header}
          alt="beauty by Kaylene header "
        />
        <Navbar className="navbar " expand="lg" sticky="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mainNav">
              <Nav.Link href="/">home</Nav.Link>

              <Nav.Link href="/services" className="nav-dropdown-special">
                services
                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="/services/#anchor-service1">
                    service1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/#anchor-service2">
                    service2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/#anchor-service3">
                    service3
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/services/#anchor-service4">
                    service4
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
              <Nav.Link href="/gallery">gallery</Nav.Link>

              <Nav.Link href="/contactUs" className="nav-dropdown-special">
                contact us
                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="/faq">faq</NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/*<hr className="headerline" />*/}
      </div>
      <div className="floating-socials">
        <a href={FacebookLink} target="_blank" rel="noreferrer">
          <img src={FacebookIcon} alt="facebook-icon" />
        </a>
        <a href={InstagramLink} target="_blank" rel="noreferrer">
          <img src={InstaIcon} alt="instagram-icon" />
        </a>
      </div>
      {/*<button id="nav-media-toggler" className="nav-media-toggler">
        <span className="nav-media-toggler-icon">X</span>
  </button>*/}
      <div id="nav-media-socials" className="nav-media-socials">
        <a href={FacebookLink} target="_blank" rel="noreferrer">
          <img src={FacebookIcon} alt="facebook-icon" />
        </a>
        <a href={InstagramLink} target="_blank" rel="noreferrer">
          <img src={InstaIcon} alt="instagram-icon" />
        </a>
      </div>
    </div>
  );
};

export default HeaderNav;
