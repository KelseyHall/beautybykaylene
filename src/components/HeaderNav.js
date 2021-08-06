import React from 'react';
import header from '../images/header.png';

// import { Navbar, Nav, NavDropdown, SplitButton } from 'react-bootstrap';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
// import '../../node_modules/bootstrap/scss/bootstrap.scss';

import '../styles/style.scss';
// import Container from 'react-bootstrap/Container';
const HeaderNav = () => {
  return (
    <div>
      <img className="headerImg" src={header} alt="beauty by Kaylene header " />
      <div className="navHeader">
        <Button>home</Button>
        <Dropdown as={ButtonGroup}>
          <Button variant="services">services</Button>
          <Dropdown.Toggle
            split
            id="dropdown-toggle"
            className="dropdown-toggle"
          />
          <Dropdown.Menu className="sub-menu">
            <Dropdown.Item eventKey="1">service 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">service 2</Dropdown.Item>
            <Dropdown.Item eventKey="3">service 3</Dropdown.Item>
            <Dropdown.Item eventKey="4">service 4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button>gallery</Button>
        <Dropdown as={ButtonGroup}>
          <Button variant="contactus">contact us</Button>
          <Dropdown.Toggle
            split
            id="dropdown-toggle-2"
            className="dropdown-toggle"
          />
          <Dropdown.Menu className="sub-menu">
            <Dropdown.Item eventKey="5">service 1</Dropdown.Item>
            <Dropdown.Item eventKey="6">service 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <hr className="fullWidth-line" />
    </div>
  );
};

export default HeaderNav;
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
