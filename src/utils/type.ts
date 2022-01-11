import { Products, Orders } from '../types';
import { ObjectId } from 'mongodb';

export interface ProductsFields extends Products{
    _id: ObjectId;
}

export interface OrderFields extends Orders {
    _id: ObjectId;
}