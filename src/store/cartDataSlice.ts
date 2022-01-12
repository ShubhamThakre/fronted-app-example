import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {cartDataInterface, CartDataProduct }from '../types';
// type Product = {
//     productId: number;
//     quantity: number;
//     name: string;
//     price: number;
// }

// export interface cartDataInterface {
//   products : Array<Product>
// }

const initialState: cartDataInterface = {
    products: [
        {
            productId:22,
            quantity:4,
            name:"White Gold Plated Princess",
            price:9.99,
            image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
    ],
}

export const cartDataSlice = createSlice({
  name: 'cartDataSlice',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartDataProduct>) => {
      state.products.push(action.payload);
    },
    deleteProductFromCart: (state) => {
        // TODO: add logic to delete the product
        state.products
    },
    updateProductFromCart: (state, action: PayloadAction<number>) => {
        // TODO: add logic to update the product
        state.products
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart, deleteProductFromCart, updateProductFromCart } = cartDataSlice.actions

export default cartDataSlice.reducer