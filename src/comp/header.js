import React from 'react';
import logo from '../image/logo.png';
 import { HeadBox } from "./HeaderStyles";
 import {BrowserRouter, Link  } from "react-router-dom";
 import './animation.css';
function Header() {
  return (
    <BrowserRouter>
    <HeadBox>
      <HeadBox>
      <Link to="/" style={{textDecoration: "none"}}>
      <h1 className='animation2' style={{ color: "white", textAlign: "center",margin: 0 }}>Doom </h1>
      </Link>
      <img src={logo} alt=''className='animation' />
      </HeadBox>
      <HeadBox>
      </HeadBox>
    </HeadBox>
    </BrowserRouter>
  );
}



export default Header;
