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
                    <div style={{ width: "inherit", display: "flex", justifyContent: "space-between", fontSize: "small" }}>
                        <div>{product.getMarketStock()}</div>
                        <div>{product.getInStock()}</div>
                    </div>
                    <div style={{ fontSize: "xxx-large" }}>{product.getIcon()}</div>
                    <div>{product.usd()}</div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;

