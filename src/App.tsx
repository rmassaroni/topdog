import React from 'react';
import User from './User';
import Market from './supplyChain/Market';
import { Product } from './inventory/Product';

const App: React.FC = () => {
    const usr = User({});
    const products: Product[] = [
        new Product('Product A', 50),
        new Product('Product B', 75),
        new Product('Product C', 100),
    ];
    const market = Market({ products: products, cash: usr.cash, inv: usr.inv});

    return (
        <div>
            <div>
            <h1>{usr.username}</h1>
        </div>
            <div className='financial-statements'>
                <h1>Financial Statements</h1>
            {usr.bs.component()}
            </div>
            <div style={{ width: "50%"}}>{usr.store.component()}</div>
        </div>
    );
};
export default App;
