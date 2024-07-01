import './App.css';
import React, { useState, useEffect } from 'react';
import { useCounter, Asset, Cash, Inventory } from './Assets';
import { Product } from './Product';
import ProductList from './ProductList';


const App: React.FC = () => {
    const cash = Cash(100);
    const inv = Inventory();

    const products: Product[] = [
        new Product('Product A', 50),
        new Product('Product B', 75),
        new Product('Product C', 100),
    ];


    return (
        <div>
            <p>{cash.fullName()}</p>
            <p>{inv.fullName()}</p>
            <button
                onClick={() => {
                    inv.buyProduct();
                    cash.updateValue(cash.value - 1);
                }}
            >Buy Product</button>
            <ProductList products={products} />
        </div>
    );
}

export default App;
