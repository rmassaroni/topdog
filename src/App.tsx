import './App.css';
import React, { useState } from 'react';
import { Cash, TotalAssets, AccountsReceivable } from './Assets';
import { Product } from './inventory/Product';
import Market from './inventory/Market';
import { AccountsPayable, TotalLiabilities } from './Liabilities';
import Inventory from './inventory/Inventory';
import { Clientele } from './clientele/Clientele';
import BalanceSheet from './BalanceSheet';
import { CashType } from './types';
import Account from './Account';
import { useGlobal } from './GlobalContext';

const App: React.FC = () => {
    const [acceptCredit, setAcceptCredit] = useState<boolean>(false);

    const cash: CashType = Cash(1000);
    const ap = AccountsPayable(0);
    const inv = Inventory(0, [], cash);
    const clientele = Clientele(inv);
    const assets = TotalAssets(cash, AccountsReceivable(), inv);
    const bs = BalanceSheet(cash, assets, TotalLiabilities());
    const account = Account();

    const { usd } = useGlobal();

    let x = usd(1000);


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
        <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
                <p>{cash.fullName()}</p>
                <p>Accept Credit: {acceptCredit ? 'true' : 'false'}</p>
                {ap.exists && <p>{ap.fullName()}</p>}
                <button onClick={() => handleLoan(100)}>Acquire Loan for $100</button>
                {inv.panel()}
                <Market 
                    products={products} 
                    cash={cash}
                    inv={inv}
                />
                {clientele.component()}
                <div>{account.component()}</div>
            </div>
            <div className='financial-statements'>
                <h1>Financial Statements</h1>
                {bs.component()}
            </div>
        </div>
    );
}

export default App;
