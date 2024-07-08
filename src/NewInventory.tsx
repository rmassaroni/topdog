import React from 'react';
import { Product } from './Product';
import { useState } from 'react';
import { Asset, Cash, AssetType } from './Assets';
import { toast } from 'react-toastify';
 type NewInventoryType = {
    products: Product[];
    buy: (product: Product, quantity: number) => void;
    fullName: () => string;
    component: () => JSX.Element;
}


// export class NewInventory {
//     private quantity: number;
//     private products: Product[];
//
//     constructor(initialValue: number = 0, initialCount: number = 0, initialQuantity: number = 0, initialProducts: Product[] = []) {
//         this.quantity = initialQuantity;
//         this.products = initialProducts;
//     }
//
//     buyProduct(p: Product, q: number = 1): void {
//         const existingProduct = this.products.find(product => product.getName() === p.getName());
//         if (existingProduct) {
//             existingProduct.setInStock(existingProduct.getInStock() + q);
//             existingProduct.setMarketStock(existingProduct.getMarketStock() - q);
//         } else {
//             this.products.push(p);
//             p.setInStock(p.getInStock() + q);
//             p.setMarketStock(p.getMarketStock() - q);
//         }
//         this.quantity += q;
//     }
//
//     sellProduct(): void {
//         this.quantity -= 1;
//     }
// }

interface InventoryProps {
    initialValue?: number;
    initialProducts?: Product[];
    cash: AssetType;
}

// const NewInventory: React.FC<InventoryProps> = ({
//    initialValue = 0,
    // initialProducts = [],
    // cash
const NewInventory = (initialValue: number = 0, initialProducts: Product[] = [], cash: AssetType ) => {
    const name: string = 'Inventory';
    const [ totalValue, setTotalValue ] = useState<number>(initialValue);
    const [ products, setProducts ] = useState<Product[]>(initialProducts);
    const [manager, setManager] = useState<boolean>(false);
    const [autoMarkup, setAutoMarkup] = useState<number>(0.05);
    const [autoSell, setAutoSell] = useState<boolean>(false);
    const [ capacity, setCapacity ] = useState<number>(20);

    const usd = (num: number = totalValue): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(num);
    }

    const fullName = (): string => {
        return name + ': ' + usd();
    }

    const getTotalStock = (): number => {
        return products.reduce((total, product) => total + product.getInStock(), 0);
    }

    const buy = (product: Product, quantity: number = 1) => {
        const existingProduct = products.find(p => p.getName() === product.getName());
        if (existingProduct) {
            existingProduct.setInStock(existingProduct.getInStock() + quantity);
            existingProduct.setMarketStock(existingProduct.getMarketStock() - quantity);
        } else {
            setProducts(prevProducts => [...prevProducts, product]);
            product.setInStock(product.getInStock() + quantity);
            product.setMarketStock(product.getMarketStock() - quantity);
        }
        setTotalValue(totalValue + product.getValue()*quantity);
        toast.info(`Bought ${product.getName()} for ${product.usd(product.getValue()*quantity)}`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const sell = (index: number) => {
        const product = products[index];
        if (product.getInStock() > 0) {
            product.setInStock(product.getInStock() - 1);
            product.setMarketStock(product.getMarketStock() + 1);
            cash.updateValue(cash.value + product.getValue()*(1+autoMarkup));
            toast.info(`Sold ${product.getName()} for ${product.usd(product.getValue()*(1+autoMarkup))}`, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        if (product.getInStock() === 0) {
            products.splice(index, 1);
        }
    };

    const component = () => {
        return (
        <div style={{ marginLeft: "10px" }}>
            <div style={{ display: "flex" }}>
                <h2 style={{ marginBottom: "10px", marginTop: "10px" }}>Inventory</h2>
                <button onClick={() => setManager(!manager)} style={{ height: "min-content", alignSelf: "center", marginLeft: "15px" }}>Manage</button>
                <h4 style={{ marginLeft: "15px", marginTop: "10px", marginBottom: "10px", alignContent: "center" }}>Capacity: {capacity}</h4>
                <h4 style={{ marginLeft: "15px", marginTop: "10px", marginBottom: "10px", alignContent: "center" }}>Total Stock: {getTotalStock()}</h4>
                <h4 style={{ marginLeft: "15px", marginTop: "10px", marginBottom: "10px", alignContent: "center" }}>Available Capacity: {capacity - getTotalStock()}</h4>
            </div>
            {manager &&<div className="manager-div" >
                <h4 style={{ marginTop: "5px", marginBottom: "10px", paddingRight: "10px" }}>Auto Markup: </h4>
                <div className="markup-container">
                    <button onClick={() => setAutoMarkup(autoMarkup-0.05)}>-</button>
                    <input type="text" value={autoMarkup.toFixed(2)}></input>
                    <button onClick={() => setAutoMarkup(autoMarkup+0.05)}>+</button>
                </div>
            </div>}
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-square" onClick={() => sell(index)}>
                    <div style={{ 
                        width: "inherit", 
                        display: "flex", 
                        justifyContent: "space-between", 
                        fontSize: "small"
                    }}>
                        <div>{product.usd(product.getMarketValue())}</div>
                        <div>{product.getInStock()}</div>
                            <div>{product.getDemand(product.getValue()*(1+autoMarkup)).toFixed(2)}</div>
                    </div>
                        <div style={{ fontSize: "xxx-large" }}>{product.getIcon()}</div>
                        <div style={{ fontSize: "medium", color: product.getValue() * (1 + autoMarkup) > product.getValue() ? "green" 
                            : product.getValue() * (1 + autoMarkup) < product.getValue()
                                ? "red"
                                : "black"}}>{product.usd(product.getValue()*(1+autoMarkup))}</div>
                        <div className="product-info">
                            <div className="popup">
                                <div className="product-name">{product.getName()}</div>
                            </div>
                        </div>
                        <div className="product-info" style={{ transform: "translate(0%, -50%)"}}>
                            <div className="popup">
                                <div className="product-name">{product.getName()}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )};
   return {
        // ...asset,
        // quantity,
        // setQuantity,
        products,
        // buyProduct,
        // sellProduct,
        buy,
        fullName,
        component,
    }
};

export type { NewInventoryType };
export { NewInventory};
