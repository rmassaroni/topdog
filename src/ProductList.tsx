import React from 'react';
import { Product } from './Product';
import { useState } from 'react';
import { Cash, AssetType } from './Assets';
import { InventoryClass, InventoryType } from './Inventory';

interface ProductListProps {
    products: Product[];
    cash: AssetType;
    inv: InventoryType;
}

const ProductList: React.FC<ProductListProps> = ({ products, cash, inv }) => {
    // const marketInv = InventoryClass(0, 0, 0, products);
    const [productList, setProductList] = useState(products);

    const handleBuy = (index: number) => {
        const newProductList = [...productList];
        // newProductList[index].buyOne();
        cash.updateValue(cash.value - newProductList[index].getValue());
        // marketInv.buyProduct(newProductList[index], -1);
        inv.buyProduct(newProductList[index], 1);
        setProductList(newProductList);
    };
    return (
        <div>
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
        </div>
        </div>
    );
}

export default ProductList;

