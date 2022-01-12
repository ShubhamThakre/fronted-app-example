import React from 'react';
import styled from 'styled-components';
import { ProductsFields } from '../utils/type';
import { Card, Col, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CardWrapper = styled.div`
    padding: 8px 0;

    &&& .ant-card-body {
        padding: 10px 0;
    }
`;
const ProductPrice = styled.span`
    font-size: 13px;
    color: #7e7e7e;
`;
const Product = (props: ProductsFields) => {
    return (
        <Col className="gutter-row" span={6}>
            <Link to={{pathname: `/products/${props.id}`}}>
                <CardWrapper>
                    <Card
                        hoverable
                        style={{ maxWidth:'240px', padding:'10px' }}
                        cover={<img alt="example" height={250} src={props.image}/>}
                    >
                        <Meta title={props.title}/>
                        <Space>
                            <ProductPrice>Price: ${props.price}</ProductPrice>
                            <ProductPrice>Rating: {`${props.rating.rate}/5`}</ProductPrice>
                        </Space>
                    </Card>
                </CardWrapper>
            </Link>
        </Col>
    )
}

export default Product
