// Interfaces and types declaration file 

/** Products */
export type Products = {
    category: String;
    description: String;
    id: Number;
    image: String;
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

type OrderProduct = {
    productId: Number;
    quantity: Number;
    name: String;
    price: Number;
}