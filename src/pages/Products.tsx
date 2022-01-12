import React, { useState, useEffect} from 'react'
import * as Realm from 'realm-web';
import { ProductsFields } from '../utils/type';
import Product from '../components/Product';
import { Col, Row, Card, Space,Pagination } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const ProductsWrapper = styled.div`
    padding: 20px 50px;
`;
const ProductsTitle = styled.div`
    font-size: 20px;
    margin: 10px 0;
`;
const CardWrapper = styled.div`
    padding: 8px 0;

    &&& .ant-card-body {
        padding: 10px 0;
    }
`;
const ProductPrice = styled.span`
    font-size: 13px;
    color: #7e7e7e;
`;
const PaginationWrapper = styled.div`
    text-align: center;
    padding: 15px;
`;

const Products = () => {
    const [products, setProducts] = useState<Array<ProductsFields>>([]);
    useEffect(() => {
        // console.log('hi');
        const getProductData =async () => {
        try {
            const user = await app.logIn(credentials);
            const allProducts = await user.functions.getAllProducts();
            console.log(allProducts);
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

    return (
        // <Row style={{padding:'0 120px'}} gutter={16}>
        //     { products && 
        //         products.map((product: ProductsFields) => {
        //             return <Col span={6} key={JSON.stringify(product.id)}><Product {...product}/></Col> 
        //         })
        //     }
        // </Row>
        <ProductsWrapper>
            <ProductsTitle>Products</ProductsTitle>
             <Row style={{}} gutter={16}>
             { products && 
                products.map((product: ProductsFields) => {
                    return <Product key={JSON.stringify(product.id)} {...product}/>
                })
            }
                {/* <Col className="gutter-row" span={6}>
                    <Link to={{pathname: "/product/id"}}>
                        <CardWrapper onClick={onProductClick}>
                            <Card
                                hoverable
                                style={{ maxWidth:'240px', padding:'10px' }}
                                cover={<img alt="example" height={250} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat"/>
                                <Space>
                                    <ProductPrice>Price: 250</ProductPrice>
                                    <ProductPrice>Rating: 3.9/5</ProductPrice>
                                </Space>
                            </Card>
                        </CardWrapper>
                    </Link>
                </Col> */}
                
            </Row>
            <PaginationWrapper>
                <Pagination defaultCurrent={1} total={50} />
            </PaginationWrapper>
        </ProductsWrapper>
    )
}

export default Products
