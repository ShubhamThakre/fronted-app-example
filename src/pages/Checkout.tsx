import React, { useState } from 'react'
import { ProductsWrapper, ProductsTitle } from '../pages/Products';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Table } from '../components/Table';
import { Button } from 'antd';
import styled from 'styled-components';
import * as Realm from 'realm-web';
import { useNavigate } from "react-router-dom";

// Constants
const ConfirmationWrapper = styled.div`
    padding: 10px 0;
    width: 500px;
`;
const EmailLabel = styled.label`
    font-size: 14px;
`;
const ConfirmEmail = styled.input`
    width: 100%;
    margin: 10px 0;
`;

export const Checkout = () => {
    // Redux Constants
    const cartProducts = useSelector((state: RootState) => state.cartData.products);

    // Constants
    const [credentialsView, setCredentialsView] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // order place function 
    const placeOrder = async() => {
        const orderData = {
            id:Math.floor(Math.random()*(999-100+1)+100),
            userId:1,
            email:email,
            date: JSON.parse(JSON.stringify(new Date)),
            products:cartProducts
        };
        // update the order in realm serverless function
        const REALM_APP_ID = 'products-yhhmh';
        const app = new Realm.App({id: REALM_APP_ID});
        const credentials = Realm.Credentials.anonymous();
        const user = await app.logIn(credentials);
        const orderUpdate = await user.functions.updateOrder(orderData);

        // set the useState to default
        setEmail('');
        // Navigate to orders screen
        navigate("../orders", { replace: true });
    };
    return (
        <ProductsWrapper>
            <ProductsTitle>Checkout Summary</ProductsTitle>
            <Table data={cartProducts}/>
            <br/>
            {email ? 
                <Button disabled>Confirm Order</Button> :
                <Button type="primary" onClick={()=>setCredentialsView(true)}>Confirm Order</Button>}
            <br />
            {credentialsView ? <ConfirmationWrapper>
                <EmailLabel>Enter your email address:</EmailLabel>
                <ConfirmEmail type={'email'} onChange={(event) => setEmail(event.target.value)}/>
                {email ? 
                    <Button type="primary" onClick={placeOrder}>Place Order</Button> : 
                    <Button disabled>Place Order</Button>}
            </ConfirmationWrapper>: null}
        </ProductsWrapper>
    )
}
