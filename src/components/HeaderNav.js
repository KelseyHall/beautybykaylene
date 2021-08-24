import React from 'react';
import header from '../images/header.png';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, SplitButton } from 'react-bootstrap';
// import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

import '../styles/style.scss';
// import Container from 'react-bootstrap/Container';
const HeaderNav = () => {
  return (
    <div>
      <img className="headerImg" src={header} alt="beauty by Kaylene header " />
      <div className="navHeader">
        <Navbar className="navbar" expand="lg" sticky="top">
          {/*<Navbar.Brand href="#home"></Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mainNav">
              <Nav.Link href="/">home</Nav.Link>

              <Nav.Link href="/gallery">gallery</Nav.Link>
              <Nav.Link href="/services" className="nav-dropdown-special">
                services
                <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    service1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    service2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    service3
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    service4
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
              <Nav.Link href="/contactUs">contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
      </div>
    </div>
  );
};

export default HeaderNav;

///////////////WOrking nav////////////
//   <div>
//   <img className="headerImg" src={header} alt="beauty by Kaylene header " />
//   <div className="navHeader">
//     <Button>
//       <Link to="/">home</Link>
//     </Button>
//     <Dropdown as={ButtonGroup}>
//       <Button variant="services">
//         <Link to="/services">services</Link>
//       </Button>
//       <Dropdown.Toggle
//         split
//         id="dropdown-toggle"
//         className="dropdown-toggle"
//       />
//       <Dropdown.Menu className="sub-menu">
//         <Dropdown.Item eventKey="1">
//           <Link to="/services/#anchor-service1">service 1</Link>
//         </Dropdown.Item>
//         <Dropdown.Item eventKey="2">
//           <Link to="/services/#anchor-service2">service 2</Link>
//         </Dropdown.Item>
//         <Dropdown.Item eventKey="3">
//           <Link to="/services/#anchor-service3">service 3</Link>
//         </Dropdown.Item>
//         <Dropdown.Item eventKey="4">
//           <Link to="/services/#anchor-service4">service 4</Link>
//         </Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//     <Button>
//       <Link to="/gallery">gallery</Link>
//     </Button>
//     <Dropdown as={ButtonGroup}>
//       <Button variant="contactus">
//         <Link to="/ContactUs">contact us</Link>
//       </Button>
//       <Dropdown.Toggle
//         split
//         id="dropdown-toggle-2"
//         className="dropdown-toggle"
//       />
//       <Dropdown.Menu className="sub-menu">
//         <Dropdown.Item eventKey="5">
//           <Link to="/faq">Faq</Link>
//         </Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   </div>
//   <hr className="fullWidth-line" />
// </div>

/* <ul className="nav">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
      </ul> */

/*<Navbar className="navHeader" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">home</Nav.Link>

              <SplitButton
                key={1}
                title="services"
                variant="btn"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item eventKey="1">services 1</NavDropdown.Item>
                <NavDropdown.Item eventKey="2">services 2</NavDropdown.Item>
                <NavDropdown.Item eventKey="3">services 3</NavDropdown.Item>

                <NavDropdown.Item eventKey="4"> services 4</NavDropdown.Item>
              </SplitButton>

              <Nav.Link href="#gallery">gallery</Nav.Link>

              <NavDropdown title="contact us" id="basic-nav-dropdown ">
                <NavDropdown.Item href="#action/4.1">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.2">
                  Other item
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>*/
