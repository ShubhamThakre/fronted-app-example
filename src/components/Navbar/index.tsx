import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Row, Col,Input } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { UnorderedListOutlined, ShoppingCartOutlined }  from '@ant-design/icons';
import Cart from '../Cart';

// Constants
const { Search } = Input;

export const Nav = styled.nav`
  background: #63D471;
  height: 50px;
  display: flex;
  justify-content: space-between;
  // padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;
  


export const ShoppingCart = styled.div`
  padding: 11px 0;
  /* height: 33px; */
  text-align: right;
`;

export const Logo = styled.div`
  height: 40px;
  // width: 127px;
  top: 0;
  background-color: #e1e1e1;
  margin: 5px 0;
  padding: 0px 15px;
`;
  
const Navbar = () => {
  // Constants
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <>
      <Row>
        <Col xs={2} sm={3} md={2} lg={2} xl={2}>
          <Logo></Logo>
        </Col>
        <Col xs={0} sm={13} md={16} lg={16} xl={16}>
          <Nav>
            <NavMenu>
              <NavLink to='/products'>
                Products
              </NavLink>
              <NavLink to='/orders'>
                Orders
              </NavLink>
            </NavMenu>
          </Nav>
        </Col>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <ShoppingCart>
            <ShoppingCartOutlined style={{fontSize:'30px'}} onClick={()=>setIsCartOpen(true)}/>
          </ShoppingCart>
        </Col>
      </Row>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
    </>
  );
};

export default Navbar;