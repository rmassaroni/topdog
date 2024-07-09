import './App.css';
import React from 'react';
import { Cash } from './Assets';
import { Product } from './Product';
import Market from './Market';
import { AccountsPayable } from './Liabilities';
import { Inventory } from './Inventory';
import { Customer, Clientele } from './Clientele';

const App: React.FC = () => {
    const cash = Cash(1000);
    const ap = AccountsPayable(0, 0);
    const inv = Inventory(0, [], cash);
    const clientele = Clientele();

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

    // function simulateNewCustomer() {
    //     Customer.currentConsumers = [...Customer.currentConsumers, new Customer()];
    //     console.log("New customer entered the store.");
    //     console.log(Customer.currentConsumers.length + " customers in the store.");
    // }
    //
    // const intervalMillis = 10000 / Customer.storePopularity;
    //
    // const intervalId = setInterval(simulateNewCustomer, intervalMillis);
    //
    // setTimeout(() => {
    //     clearInterval(intervalId);
    //     console.log("Simulation stopped.");
    // }, 10000);


    // const intervalMillis = 10000 / clientele.storePopularity;


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
            {clientele.component()}
        </div>
    );
}

export default App;
