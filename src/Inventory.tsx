import React from 'react';
import { Product } from './Product';
import { useState } from 'react';
import { Asset, Cash, AssetType } from './Assets';

interface InventoryType {
    quantity: number;
    setQuantity: (q: number) => void;
    products: Product[];
    buyProduct: (p: Product, q: number) => void;
    sellProduct: () => void;
    fullName: () => string;
}



const InventoryClass = (initialValue: number = 0, initialCount: number = 0, initialQuantity: number = 0, initialProducts: Product[] = []) => {
    const asset = Asset(initialValue, initialCount, 'Inventory');
    const [ quantity, setQuantity ] = useState<number>(initialQuantity);
    const [ products, setProducts ] = useState<Product[]>(initialProducts);

    const buyProduct = (p: Product, q: number = 1) => {
        // setProducts(prevProducts => [...prevProducts, p]);
        // setQuantity(prevQ => prevQ + 1);
        const existingProduct = products.find(product => product.getName() === p.getName());

        if (existingProduct) {
            existingProduct.setInStock(existingProduct.getInStock() + q);
            existingProduct.setMarketStock(existingProduct.getMarketStock() - q);
        } else {
            setProducts(prevProducts => [...prevProducts, p]);
            p.setInStock(p.getInStock() + q);
            p.setMarketStock(p.getMarketStock() - q);

        }

        setQuantity(prevQ => prevQ + q);
    };

    const sellProduct = () => {
        // setProducts(prevProducts => {
        //     const updatedProducts = [...prevProducts];
        //     updatedProducts.splice(index, 1);
        //     return updatedProducts;
        // });
        setQuantity(prevQ => prevQ - 1);
    };

    const fullName = (): string => {
        return `${asset.fullName()}, quantity: ${quantity}`;
    };

    return {
        ...asset,
        quantity,
        setQuantity,
        products,
        buyProduct,
        sellProduct,
        fullName
    }
}


interface InventoryProps {
    products: Product[];
    cash: AssetType;
}

const Inventory: React.FC<InventoryProps> = ({ products, cash }) => {
    const [manager, setManager] = useState<boolean>(false);
    const [productList, setProductList] = useState(products);
    const [autoMarkup, setAutoMarkup] = useState<number>(1.05);

    const handleBuy = (index: number) => {
        // const newProductList = [...productList];
        // newProductList[index].buyOne();
        // cash.updateValue(cash.value - newProductList[index].getValue());
        // setProductList(newProductList);
    };
    return (
        <div>
            <div style={{ display: "flex" }}>
                <h2>Inventory</h2>
                <button onClick={() => setManager(!manager)} style={{ height: "min-content", alignSelf: "center", marginLeft: "15px" }}>Manage</button>
            </div>
            {manager &&<div style={{ display: "flex", height: "min-content" }}>
                <h4>Auto Markup: {autoMarkup}</h4>
            </div>}
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
        </div>
    );
}

// export default Inventory;
export type { InventoryType };
export { Inventory, InventoryClass};

