import './App.css';
import React, { useState } from 'react';
import { Cash, AccountsReceivable } from './accounts/assets/Assets';
import TotalAssets from './accounts/assets/TotalAssets';
import BalanceSheet from './accounts/BalanceSheet';
import { AccountsPayable } from './accounts/liabilities/Liabilities';
import TotalLiabilities from './accounts/liabilities/TotalLiabilities';
import { Product } from './inventory/Product';
import Market from './supplyChain/Market';
import Inventory from './inventory/Inventory';
import { Clientele } from './clientele/Clientele';
import { CashType } from './types';
import Store from './store/Store';

const App: React.FC = () => {
    const [acceptCredit, setAcceptCredit] = useState<boolean>(false);

    const cash: CashType = Cash(1000);
    const ap = AccountsPayable(0);
    const inv = Inventory(0, [], cash);
    const clientele = Clientele(inv);
    const assets = TotalAssets(cash, AccountsReceivable(), inv);
    const liabilities = TotalLiabilities(ap);
    const bs = BalanceSheet(assets, liabilities);

    const products: Product[] = [
        new Product('Product A', 50),
        new Product('Product B', 75),
        new Product('Product C', 100),
    ];

    const handleLoan = (loanAmount: number = 100) => {
        cash.setValue(cash.value + loanAmount);
        ap.setValue(ap.value + loanAmount);
        ap.setExists(true);
    }

    // return (
    //     <div style={{ display: "flex" }}>
    //         <div style={{ width: "50%" }}>
    //             <p>{cash.fullName()}</p>
    //             <p>Accept Credit: {acceptCredit ? 'true' : 'false'}</p>
    //             {ap.exists && <p>{ap.fullName()}</p>}
    //             <button onClick={() => handleLoan(100)}>Acquire Loan for $100</button>
    //             {inv.panel()}
    //             <Market 
    //                 products={products} 
    //                 cash={cash}
    //                 inv={inv}
    //             />
    //             {clientele.component()}
    //             {Store(10, 10)}
    //         </div>
    //         <div className='financial-statements'>
    //             <h1>Financial Statements</h1>
    //             {bs.component()}
    //         </div>
    //     </div>
    // );
    return (
        <div style={{ width: "500px", height: "500px"}}>
            {Store(5, 5).component()}
        </div>
    );
}

export default App;
