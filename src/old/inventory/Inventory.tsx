import React from 'react';
import { Product } from './Product';
import { useState } from 'react';
import Asset from '../accounts/assets/Assets';
import { toast } from 'react-toastify';
import { USD } from '../utils';
import ProductList from './ProductList';
import { iInventory } from './types';
import { iCash } from '../accounts/assets/types';

const Inventory = (initialValue = 0, initialProducts = [], cash: iCash ): iInventory => {
    const [ totalValue, setTotalValue ] = useState<number>(initialValue);
    const [ products, setProducts ] = useState<Product[]>(initialProducts);
    const [manager, setManager] = useState<boolean>(false);
    const [autoMarkup, setAutoMarkup] = useState<number>(0.05);
    const [autoSell, setAutoSell] = useState<boolean>(false);
    const [ capacity, setCapacity ] = useState<number>(20);

    const getTotalStock = (): number => products.reduce((total, product) => total + product.getInStock(), 0);

    const usd = (val: number = totalValue): string => USD(val);

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
        toast.info(`Purchased ${product.getName()} for ${product.usd(product.getValue()*quantity)}`, {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const sell = (index: number): void => {
        const product = products[index];
        if (product.getInStock() > 0) {
            product.setInStock(product.getInStock() - 1);
            product.setMarketStock(product.getMarketStock() + 1);
            cash.setValue(cash.value + product.getValue()*(1+autoMarkup));
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

    const panel = (): JSX.Element => (
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
            <ProductList products={products} autoMarkup={autoMarkup} sell={sell} />
        </div>
    );

    const component = () => (
        <div className="asset-square">
            <div>{'Inventory'}</div>
            <div>{usd()}</div>
        </div>
    );

    return {
        ...Asset(totalValue, 'Inventory'),
        products,
        buy,
        sell,
        panel,
        usd,
        component,
    }
};

export default Inventory;
