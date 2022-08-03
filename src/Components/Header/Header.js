import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
  <>
    <Navbar bg="light"  expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto me-0">
            <Nav.Link href="#home"> <Button variant="outline-primary" className='signin-btn'>Sign In</Button></Nav.Link>
            <Nav.Link href="#link"> <Button variant="primary">Join Now</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Header