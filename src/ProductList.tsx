import React from 'react';
import { Product } from './Product';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.getIcon()}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;

