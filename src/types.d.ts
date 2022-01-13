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

export type OrderTableProps = {
    date: String;
    email: String;
    id: Number;
    userId: Number;
    products: Array<CartDataProduct>
}
export interface TableProps {
    data: Array<CartDataProduct>
}

/** Cart */
export type CartProps = {
    isCartOpen: boolean,
    setIsCartOpen: (cart: boolean) => void
}
export interface TableProps {
    data: Array<CartDataProduct>
}

/** Redux */
export type CartDataProduct = {
    productId: Number;
    quantity: Number;
    name: String;
    price: Number;
    image: string;
}
export interface cartDataInterface {
  products : Array<CartDataProduct>
}
