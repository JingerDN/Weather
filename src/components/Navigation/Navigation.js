import React from "react";
import Logo from "./logo_white_cropped.png";
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

import "./style.scss";

const Navigation=()=>{
    return <div>
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={Logo}/></Navbar.Brand>
   <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Weather in your city"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="warning">Search</Button>
    </Form>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#guide">Guide</Nav.Link>
      <Nav.Link href="#api">API</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#maps">Maps</Nav.Link>
      <Nav.Link href="#partners">Partners</Nav.Link>
      <Nav.Link href="#blogs">Blogs</Nav.Link>
      <Nav.Link href="#marketplace">Marketplace</Nav.Link>
      <Nav.Link href="#initiatives">Our Initiatives</Nav.Link>
      <NavDropdown title="Jinger" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">My services</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">My API keys</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">My payment</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">My profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Support" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">How to start</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Ask a quiestions</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
}
export default Navigation;