import React, { useState } from 'react';
import { Row, Col, Menu } from 'antd';
import { UnorderedListOutlined, ShoppingCartOutlined }  from '@ant-design/icons';
import styled from 'styled-components';

//Constants
const { SubMenu } = Menu;
const Wrapper = styled.div`
    padding: 0 15px;
`;
const Logo = styled.div`
    height: 44px;
    width: 127px;
    background-color: #e1e1e1;
    margin: 5px;
`;
const Title = styled.span`
    color: #787878;
    font-size: 19px;
    font-weight: 800;
`;
export const Header = () => {
    return(
        <Wrapper>
            <Row>
                <Col xs={12} sm={8} md={6} lg={6} xl={6}>
                    <Logo><Title>SHOP APP</Title></Logo>
                </Col>
                <Col xs={0} sm={8} md={12} lg={12} xl={12}>
                    {/* <Menu onClick={handleClick} selectedKeys={menuItem} mode="horizontal">
                        <Menu.Item key="mail" icon={<UnorderedListOutlined />>
                            Products
                        </Menu.Item>
                    </Menu>  */}
                    <Menu>
                        <Menu.Item key="products">Products</Menu.Item>
                        <Menu.Item key="orders">Orders</Menu.Item>
                    </Menu>
                </Col>
                <Col xs={12} sm={8} md={6} lg={6} xl={6}>
                    Shopping cart icons
                </Col>
            </Row>
        </Wrapper>
    );
}