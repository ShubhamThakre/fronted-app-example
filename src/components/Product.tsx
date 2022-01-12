import React from 'react';
import styled from 'styled-components';
import { ProductsFields } from '../utils/type';
import { Card } from 'antd';

const { Meta } = Card;

export const CardWrapper = styled.div`
    padding: 10px;
`;

const Product = (props: ProductsFields) => {
    console.log('product', props)
    return (
        <Card
            hoverable
            style={{ width: 240, padding:'10px' }}
            cover={<img alt="example" height={250} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

export default Product
