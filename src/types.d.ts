// Interfaces and types declaration file 

/** Products */
export type Products = {
    category: String;
    description: String;
    id: Number;
    image: string;
    price: Number
    rating: Rating
    title: String;
}

type Rating = {
    rate: Number;
    count: Number;
}


/** Orders */
export type Orders = {
    id: Number,
    userId: Number,
    email: String,
    date: String,
    products: Array<OrderProduct>
}

export type OrderProduct = {
    productId: Number;
    quantity: Number;
    name: String;
    price: Number;
}

/** Redux */
export type CartDataProduct = {
    productId: Number;
    quantity: Number;
    name: String;
    price: Number;
    image: String;
}
export interface cartDataInterface {
  products : Array<CartDataProduct>
}

// https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jp... 2
// https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg