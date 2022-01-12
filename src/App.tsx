import React, { useEffect, useState } from 'react';
import './App.css';
import * as Realm from 'realm-web';
import { ProductsFields } from './utils/type';
import { Header } from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Orders from './pages/Orders';


import 'antd/dist/antd.css';
import Container from './components/Container';
import styled from 'styled-components';

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
  height: 40px; bottom: 0;
`;

function App() {
  // const [products, setProducts] = useState<Array<ProductsFields>>([]);
  // useEffect(() => {
  //   // console.log('hi');
  //   const getProductData =async () => {
  //     try {
  //       const user = await app.logIn(credentials);
  //       const allProducts = await user.functions.getAllProducts();
  //       console.log(allProducts);
  //       setProducts(allProducts);
  //     } catch (error) {
  //       console.log('realm error', error);
  //     }  
  //   }
  //   const REALM_APP_ID = 'products-yhhmh';
  //   const app = new Realm.App({id: REALM_APP_ID});
  //   const credentials = Realm.Credentials.anonymous();
  //   getProductData();
  // }, [])
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
            <Route path='/orders' element={<Orders/>} />
            {/* <Route path='/events' component={Events} /> */}
          </Routes>
        </Container>
      </ContainerWrapper>
      <FooterWrapper>
        i am footer;
      </FooterWrapper>
      
    </Router>
    // <div className="App">
    //     <Header />
    //     {products && products.map((product: ProductsFields) => <p key={JSON.stringify(product.id)}>{product.title}</p>)}
    // </div>
  );
}

export default App;
