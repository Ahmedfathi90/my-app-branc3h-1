import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Footer from './comp/footer';
import Header from './comp/header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <BrowserRouter >
    <App />
    </BrowserRouter>
    <Footer />
  </>
);
