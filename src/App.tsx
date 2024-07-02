import './App.css';
import React, { useState, useEffect } from 'react';
import { Cash } from './Assets';
import { Product } from './Product';
import ProductList from './ProductList';
import { Inventory } from './Inventory';
import { InventoryClass } from './Inventory';

const App: React.FC = () => {
    const cash = Cash(1000);
    const inv = InventoryClass();
    // const inv = Inventory();
    
    const startingInventory: Product[] = [
    ];

    const products: Product[] = [
        new Product('Product A', 50),
        new Product('Product B', 75),
        new Product('Product C', 100),
    ];


    return (
        <div>
            <p>{cash.fullName()}</p>
            <Inventory 
                products={inv.products} 
                cash={cash}
                />
            <ProductList 
                products={products} 
                cash={cash}
                inv={inv}
            />
        </div>
    );
}

export default App;
