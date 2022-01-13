import React, { useEffect, useState } from 'react';
import {ProductsWrapper,ProductsTitle} from './Products';
import * as Realm from 'realm-web';
import { OrderTableFields } from '../utils/type';
import { TableOrders } from '../components/TableOrders';


const Orders = () => {
    // Constants
    const [orders, setOrders] = useState<Array<OrderTableFields>>([]);
    
    // useEffect- to get the data from backends serverless function
    useEffect(() => {
        const getOrdersData =async () => {
        try {
            const user = await app.logIn(credentials);
            const allOrders = await user.functions.getAllOrders();
            setOrders(allOrders);
        } catch (error) {
            console.log('realm error', error);
        }  
        }
        const REALM_APP_ID = 'products-yhhmh';
        const app = new Realm.App({id: REALM_APP_ID});
        const apiKey = 'vZf33uGb6YHiNf3NmAtosJbIebb1kWbicP3XsSJvuii0nlAcA6PdNscqzV2ANbQe';
        const credentials = Realm.Credentials.serverApiKey(apiKey);
        getOrdersData();
    }, [])
    return (
        <div>
            <ProductsWrapper>
                <ProductsTitle>Orders</ProductsTitle>
                <TableOrders data={orders}/>
            </ProductsWrapper>
        </div>
    )
}

export default Orders
