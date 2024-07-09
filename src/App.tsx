import './App.css';
import React, { useState, useEffect } from 'react';
import { Cash } from './Assets';
import { Product } from './Product';
import Market from './Market';
import { AccountsPayable } from './Liabilities';
import { Inventory } from './Inventory';

const App: React.FC = () => {
    const cash = Cash(1000);
    const ap = AccountsPayable(0, 0);
    const inv = Inventory(0, [], cash);

    const products: Product[] = [
        new Product('Product A', 50),
        new Product('Product B', 75),
        new Product('Product C', 100),
    ];

    const handleLoan = (loanAmount: number = 100) => {
        cash.updateValue(cash.value + loanAmount);
        ap.updateValue(ap.value + loanAmount);
        ap.updateExists(true);
    }

    return (
        <div>
            <p>{cash.fullName()}</p>
            {ap.exists && <p>{ap.fullName()}</p>}
            <button onClick={() => handleLoan(100)}>Acquire Loan for $100</button>
            {inv.component()}
            <Market 
                products={products} 
                cash={cash}
                inv={inv}
            />
        </div>
    );
}

export default App;
