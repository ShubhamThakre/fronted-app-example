import { Products, Orders, OrderTableProps } from '../types';
import { ObjectId } from 'mongodb';

export interface ProductsFields extends Products{
    _id: ObjectId;
}
export interface OrderFields extends Orders {
    _id: ObjectId;
}
export interface OrderTableFields extends OrderTableProps {
    _id: ObjectId;
}