import React from 'react'
import styled from 'styled-components';
import { OrderTableFields } from '../utils/type';
import { Table } from './Table';

type Props = {
    data: Array<OrderTableFields>
}

// Constants
const OrdersWrapper = styled.div`
    border: 1px solid #e1e1e1;
    padding: 10px;
`;
const Order = styled.div`
    border: 1px solid #e1e1e1;
    padding: 5px;
    margin: 10px 0 0 0;
`;
const UserDetails = styled.div`
    display: flex;
`;
const Item = styled.h4`
    color: #a5a5a5;
    padding-right: 20px;
`;
export const TableOrders = ({data}: Props) => {
    return (
        <OrdersWrapper>
            {data && data.map(element => {
                return <Order key={JSON.stringify(element._id)}>
                            <UserDetails>
                                <Item>UserID: {element.id}</Item>
                                <Item>Email: {element.email}</Item>
                            </UserDetails>
                            <Table data={element.products}/>
                        </Order>;
            })}
        </OrdersWrapper>
    )
}
