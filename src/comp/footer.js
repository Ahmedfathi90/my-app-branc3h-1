import React from 'react';
import {BrowserRouter, Link  } from "react-router-dom";
import {
  Box,
  Brag,
  Container,
  Row,
  Column,
   Heading,
} from "./FooterStyles";
const Footer = () => {
  return (
    <BrowserRouter >
      <Box>
       
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <Link to="/callus" style={{textDecoration: "none", height: "50px"}}>
            <Brag>call us</Brag>
            </Link>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <Link to="/Writing" style={{textDecoration: "none", height: "50px"}}>
            <Brag>Writing</Brag>
            </Link>
            <Link to="/Internships" style={{textDecoration: "none", height: "50px"}}>
            <Brag>Internships</Brag>
            </Link>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <Link to="/UttarPradesh" style={{textDecoration: "none", height: "50px"}}>
            <Brag>Uttar Pradesh</Brag>
            </Link>
            <Link to="/Ahemdabad" style={{textDecoration: "none", height: "50px"}}>
            <Brag>Ahemdabad</Brag>
            </Link>
           
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <Link to="/Facebook" style={{textDecoration: "none", height: "50px"}}>
            <Brag>Facebook</Brag>
            </Link>
             
            <Link to="/Instagram" style={{textDecoration: "none", height: "50px"}}>
            <Brag>Instagram</Brag>
            </Link>

            <Link to="/Youtube" style={{textDecoration: "none", height: "50px"}}>
            <Brag>Youtube</Brag>
            </Link>
           
          </Column>
        </Row>
      </Container>
    </Box>
  
    </BrowserRouter>
  );
}

export default Footer;
