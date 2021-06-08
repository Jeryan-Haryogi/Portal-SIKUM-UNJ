import React from 'react';
import {Navbar, NavItem,
     NavDropdown, MenuItem,
     Nav,Container } from 'react-bootstrap';
import {Router as Router, Switch, Route} from 'react-router-dom';
function NavbarElement ()
{
    return (
        <>
<Navbar  expand="lg" style={{backgroundColor: "orange"}}>
   <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Universitas_Negeri_Jakarta_logo.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}
export default NavbarElement;