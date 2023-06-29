import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// const Header = () => {

//     const history = useNavigate();
//     const location = useLocation();
    
//     const path = location.pathname;
  
//     return  <div className="topnav">
//               <div className="d-flex">
//                 <div className="w-50 d-flex justify-content-start">
//                   <span className="logo-item"><Image src={require("../assets/logo.png")}/></span>
//                 </div>
//                 <div className="w-50 d-flex justify-content-end pt-4 nav-items">
//                   <span className="p-4" onClick={() => history('/')}>
//                     Home
//                     {path === '/' ? <p className="active-link mt-2"></p>: ''}
//                   </span>
//                   <span className="p-4" onClick={() => history('/blog-list')}>
//                     Blog
//                     {path === '/blog-list' ? <p className="active-link mt-2"></p>: ''}
//                   </span>
//                 </div>
//               </div>
//               {path === '/blog-list' ? <div className="d-md-flex justify-content-center blog-heading d-none "><span>Blog</span></div> : ""}
//             </div>
// }

const Header = () => {
  return <Navbar bg="light" data-bs-theme="light" className="header shadow p-3 bg-white rounded aniamtion-fade-in-down">
  <Container>
    <Navbar.Brand href="#home">
            <img
              src={require('../assets/logo.png')}
              width="30"
              height="30"
              className="d-inline-block align-top m-1"
              alt="React Bootstrap logo"
            />
                
      </Navbar.Brand>
    <Nav className="">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Configurator</Nav.Link>
    </Nav>
  </Container>
</Navbar>
}


export default Header;