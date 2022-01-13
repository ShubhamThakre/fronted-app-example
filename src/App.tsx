import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Orders from './pages/Orders';
import { Checkout } from './pages/Checkout';
import Container from './components/Container';
import { Footer } from './components/Footer';

import 'antd/dist/antd.css';
import './App.css';
import { ProductDetails } from './components/ProductDetails';

export const NavbarWrapper = styled.div`
  height: 50px; 
  top: 0; 
  background-color: #63D471;
  padding: 0 15px
`;

export const ContainerWrapper = styled.div`
  min-height: calc(100vh - 90px); 
  background-color: #f5f5f5;
`;

export const FooterWrapper = styled.div`
  height: 40px; 
  bottom: 0;
  text-align: center;
`;

function App() {
  return (
    <Router>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <ContainerWrapper>
        <Container>
          <Routes>
            <Route path='/'  element={<Products />} />
            <Route path='/products'  element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/orders' element={<Orders/>} />
          </Routes>
        </Container>
      </ContainerWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Router>
  );
}

export default App;
