import React, { useEffect, useState } from 'react';
import './App.css';
import * as Realm from 'realm-web';
import { ProductsFields } from './utils/type';

function App() {
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
    <div className="App">
        hellosdsdsdds
        {products && products.map((product: ProductsFields) => <p key={JSON.stringify(product.id)}>{product.title}</p>)}
    </div>
  );
}

export default App;
