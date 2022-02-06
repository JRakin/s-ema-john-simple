import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    //finding the product by key
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h2>Your Product Details</h2>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;