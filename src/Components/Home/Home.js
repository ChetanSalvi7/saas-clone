import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Flows from '../Flows/Flows';
import Marketing from '../Marketing/Marketing';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
// import HomeTab from './Home-tab/HomeTab';

const Home = () => {
  return (
    <>
      <Container className='home-container' >
        <h1 className='text-black-50-center '>Inspiration for SaaS marketers</h1>
        <p className='text-black-20-center '>Browse hundreds of SaaS marketing pages, product interfaces and email flows.</p>
        <Button variant="outline-primary" className='button-Get d-block mx-auto '>Get Full Access</Button>


        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav >
            <div className='data-show-on mb-2'>
              <div className="data-show-on-box row justify-content-center">
                <Nav.Item className='w-auto' >
                  <Nav.Link eventKey="first"><a href="#11" > <div className='col-auto tap-button '>Email Flows</div></a></Nav.Link>
                </Nav.Item>
                <Nav.Item className='w-auto'>
                  <Nav.Link eventKey="second"><a href="#22" > <div className='col-auto tap-button '>Marketing Pages</div></a></Nav.Link>
                </Nav.Item>
                <Nav.Item className='w-auto'>
                  <Nav.Link eventKey="first"><a href="#33" > <div className='col-auto tap-button '>Product Interfaces</div></a></Nav.Link>
                </Nav.Item>
                <Nav.Item className='w-auto'>
                  <Nav.Link eventKey="first"><a href="#44" > <div className='col-auto tap-button '>Blog Posts</div></a></Nav.Link>
                </Nav.Item>
              </div>
            </div>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Flows />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Marketing />
            </Tab.Pane>
          </Tab.Content>
         
          
          
          {/* <HomeTab /> */}
        </Tab.Container>
      </Container>
    </>
  )
}

export default Home