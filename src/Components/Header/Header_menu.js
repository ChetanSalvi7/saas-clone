import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../Image/saasframe logo.svg'


const Header_menu = () => {
  return (
   <>
   <Navbar bg="light"  expand="lg" className='vertical-navbar'>
      <Container className='d-flex flex-column justify-space-between'>
        <Navbar.Brand href="#home"><img src={Logo} height="50" width="50" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-auto d-flex flex-column">
            <Nav.Link href="#link" className='nav-menu-item'><i className="fa-solid fa-house"></i></Nav.Link>
            <Nav.Link href="#link1" className='nav-menu-item'><i className="fa-solid fa-layer-group"></i></Nav.Link>
            <Nav.Link href="#link2" className='nav-menu-item'><i className="fa-solid fa-clock"></i></Nav.Link>
            <Nav.Link href="#link3" className='nav-menu-item'><i className="fa-solid fa-ellipsis"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header_menu