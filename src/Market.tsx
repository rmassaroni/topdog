import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CashType, InventoryType } from './types';
import { Product } from './Product';

interface MarketProps {
    products: Product[];
    cash: CashType;
    inv: InventoryType;
}

const Market: React.FC<MarketProps> = ({ products, cash, inv}) => {
    const [productList, setProductList] = useState(products);

    const handleBuy = (index: number) => {
        const newProductList = [...productList];
        if (cash.spendCash(newProductList[index].getValue())) {
            inv.buy(newProductList[index], 1);
        }
        setProductList(newProductList);
    };
    return (
        <div style={{ marginLeft: "10px" }}>
            <h2>Market</h2>
            <div className="product-list">
                {productList.map((product, index) => (
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
                <ToastContainer />
            </div>
        </div>
    );
}

export default Market;

