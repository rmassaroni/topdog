import React from 'react';
import { Product } from './Product';
import { useState } from 'react';
import { Cash, AssetType } from './Assets';

interface ProductListProps {
    products: Product[];
    cash: AssetType;
}

const ProductList: React.FC<ProductListProps> = ({ products, cash }) => {
    const [productList, setProductList] = useState(products);

    const handleBuy = (index: number) => {
        const newProductList = [...productList];
        newProductList[index].buyOne();
        cash.updateValue(cash.value - newProductList[index].getValue());
        setProductList(newProductList);
    };
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-square" onClick={() => handleBuy(index)}>
                    <div style={{ 
                        width: "inherit", 
                        display: "flex", 
                        justifyContent: "space-between", 
                        fontSize: "small"
                    }}>
                        <div>{product.getMarketStock()}</div>
                        <div>{product.getInStock()}</div>
                    </div>
                    <div style={{ fontSize: "xxx-large" }}>{product.getIcon()}</div>
                    <div style={{ fontSize: "medium" }}>{product.usd()}</div>
                    <div className="product-info">
                        <div className="popup">
                            <div className="product-name">{product.getName()}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;

