import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

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
                MENU 
                </Col>
                <Col xs={12} sm={8} md={6} lg={6} xl={6}>
                Shopping cart icons
                </Col>
            </Row>
        </Wrapper>
    );
}