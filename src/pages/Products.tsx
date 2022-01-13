import React, { useState, useEffect} from 'react'
import * as Realm from 'realm-web';
import { ProductsFields } from '../utils/type';
import Product from '../components/Product';
import { Row, Card,Pagination,Input, Col } from 'antd';
import styled from 'styled-components';

// Constants
const { Meta } = Card;
const { Search } = Input;

export const ProductsWrapper = styled.div`
    padding: 20px 50px;
`;
export const ProductsTitle = styled.div`
    font-size: 20px;
    margin: 10px 0;
`;
export const PaginationWrapper = styled.div`
    text-align: center;
    padding: 15px;
`;
const SearchWrapper = styled.div`
    // padding: 0px 250px;
`;

const Products = () => {
    // Constants
    const [products, setProducts] = useState<Array<ProductsFields>>([]);
    
    // useEffect- to get the data from backends serverless function
    useEffect(() => {
        const getProductData =async () => {
        try {
            const user = await app.logIn(credentials);
            const allProducts = await user.functions.getAllProducts();
            setProducts(allProducts);
        } catch (error) {
            console.log('realm error', error);
        }  
        }
        const REALM_APP_ID = 'products-yhhmh';
        const app = new Realm.App({id: REALM_APP_ID});
        const credentials = Realm.Credentials.anonymous();
        getProductData();
    }, [])

    const onSearch = async(value:string) => {
        const REALM_APP_ID = 'products-yhhmh';
        const app = new Realm.App({id: REALM_APP_ID});
        const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
            if(!value){
                const allProducts = await user.functions.getAllProducts();
                setProducts(allProducts);
            }else{
                const allProducts = await user.functions.getProductSearch(JSON.stringify(value));
                setProducts(allProducts);
            }
        } catch (error) {
            console.log('realm error', error);
        }
    };


    return (
        <ProductsWrapper>
            <SearchWrapper>
                <Row>
                    <Col span={12} offset={6}>
                        <Search
                            placeholder="input search text"
                            allowClear={true}
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
            </SearchWrapper>
            <ProductsTitle>Products</ProductsTitle>
             <Row style={{}} gutter={16}>
                { products && 
                    products.map((product: ProductsFields) => {
                        return <Product key={JSON.stringify(product.id)} {...product}/>
                    })
                }   
            </Row>
            <PaginationWrapper>
                <Pagination defaultCurrent={1} total={50} />
            </PaginationWrapper>
        </ProductsWrapper>
    )
}

export default Products
