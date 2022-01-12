import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as Realm from 'realm-web';
import { ProductsFields } from '../utils/type';
import { PageHeader, Button, Descriptions,Typography, Image, Col, Row, Space, message } from 'antd';
import { MinusSquareTwoTone, PlusSquareTwoTone } from '@ant-design/icons';
import { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../store/cartDataSlice';
import { CartDataProduct } from '../types';

import styled from 'styled-components';

const { Paragraph } = Typography;
const ProductDetailsWrapper =styled.div`
    padding: 24px;
    background-color: #f5f5f5;
`;
const Icon = styled.div`
    font-size: 20px;
    margin-top: -3px;
`;
const BuyNow = styled.div`
    font-size: 18px;
    padding: 0 5px;
`;
export const ProductDetails = () => {
    // Constants
    const { id } = useParams();
    const [product, setProduct] = useState<ProductsFields>();
    const [counter, setCounter] = useState<number>(1);

    // Redux Constants
    const cartProducts = useSelector((state: RootState) => state.cartData.products);
    const dispatch = useDispatch();

    // useEffect - to get the single product details 
    useEffect(() => {
        const getProduct =async () => {
        try {
            const user = await app.logIn(credentials);
            const productFromDb = await user.functions.getProductDetails(parseInt(id || ''));
            setProduct(productFromDb[0]);
        } catch (error) {
            console.log('realm error', error);
        }  
        }
        const REALM_APP_ID = 'products-yhhmh';
        const app = new Realm.App({id: REALM_APP_ID});
        const credentials = Realm.Credentials.anonymous();
        getProduct();
    }, [])

    // add to cart function 
    const addToCart = () =>{
        //Add logic to save product list to cart 
        console.log('redux cart data', cartProducts);
        const cartData: CartDataProduct = {
            name: product?.title || '',
            price: product?.price || 0,
            productId: product?.id || 0,
            quantity: counter,
            image:product?.image || '',
        }
        dispatch(addProductToCart(cartData));


        message.success('Product added to Cart Successfully.');
        // window.history.back()
    }

    return (
        <ProductDetailsWrapper>
            <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title={product?.title}
            >
                <Descriptions size="small" column={1}>
                    <Descriptions.Item>
                        <Image
                            width={200}
                            src={product?.image}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">
                        <Paragraph>{product?.description}</Paragraph>
                    </Descriptions.Item>
                </Descriptions>    
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Category">{product?.category}</Descriptions.Item>
                    <Descriptions.Item label="Price">{`$${product?.price}`}</Descriptions.Item>
                    <Descriptions.Item label="Rating">{`${product?.rating?.rate}/5`}</Descriptions.Item>
                    <Descriptions.Item label="Product Sale Count">{product?.rating?.count}</Descriptions.Item>
                    <Descriptions.Item label="Quantity">
                        <Icon>
                            <MinusSquareTwoTone onClick={() => setCounter(counter-1)}/>
                        </Icon>
                        <BuyNow>
                            {counter < 1 ? '0' : counter}
                        </BuyNow>
                        <Icon>
                            <PlusSquareTwoTone onClick={() => setCounter(counter+1)} />
                        </Icon>
                    </Descriptions.Item>
                    <Descriptions.Item>
                        {counter < 1 ? 
                            <Button disabled>Add to Cart</Button>:
                            <Button onClick={addToCart}>Add to Cart</Button> }
                    </Descriptions.Item>
            </Descriptions>
            </PageHeader>
        </ProductDetailsWrapper>
    )
}
