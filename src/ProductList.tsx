import React from 'react';
import { Product } from './Product';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-square">
                    {product.getIcon()}
                </div>
            ))}
        </div>
    );
}

export default ProductList;

