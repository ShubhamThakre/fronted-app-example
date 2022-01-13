import React from 'react';
import { Button, Drawer } from 'antd';
import { CartProps } from '../types';
import { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Table } from './Table';


// Constants
const CartWrapper = styled.div`
    &&& .ant-drawer-body { 
        background: #f5f5f5
    }
`;
const CartProductsWrapper = styled.div`
    padding: 15px;
`;

const Cart = ({isCartOpen, setIsCartOpen} : CartProps) => {
    // Redux Constants
    const cartProducts = useSelector((state: RootState) => state.cartData.products);
    const dispatch = useDispatch();

    // Constants
    const navigate = useNavigate();

    // Checkout Function- close the modal and navigate to checkout page
    const checkoutFunction = () => {
        //close the model
        setIsCartOpen(false);
        // navigate to other route
        navigate("../checkout", { replace: true });
    }  
    return (
        <CartWrapper>
            <Drawer
                title="Shopping Cart"
                placement={'right'}
                width={500}
                onClose={()=>setIsCartOpen(false)}
                visible={isCartOpen}
            >
                <CartProductsWrapper>
                    <Table data={cartProducts}/>
                    <br />
                    <Button type="primary" onClick={checkoutFunction}>Checkout</Button>
                </CartProductsWrapper>
            </Drawer>
        </CartWrapper>
    )
}

export default Cart
