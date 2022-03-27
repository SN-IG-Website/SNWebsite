import React from "react";
import "./navbar.css";
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';

function NavbarComp() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">Sarojini Naidu Indira Gandhi Hall Of Residence</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Home" id="basic-nav-dropdown">
                <NavDropdown.Item href="about">About</NavDropdown.Item>
                <NavDropdown.Item href="infrastructure">
                  Infrastructure
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="#link">Office bearers</Nav.Link>
              <Nav.Link href="alumni">Alumni</Nav.Link>
              <Nav.Link href="gallery">Gallery</Nav.Link>
              <Nav.Link href="#link">Achievements</Nav.Link>
              <Nav.Link href="#link">Our Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
