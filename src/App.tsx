import './App.css';
import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import {Asset, Cash, AccountsReceivable } from './Assets';


const App: React.FC = () => {
    // const cash = new Cash(100.00);
    // const [cash, setCash] = useState<Cash>(new Cash(100.00));
    const [cash, setCash] = useState<number>(100.00);

    const handleCashUpdate = (newValue: number) => {
        setCash(newValue);
    };
    const receivable = new AccountsReceivable(500.00);

    
    
    return (
        <div>
            <p>{receivable.USD()}</p>
            <button onClick={() => {
                // setCash(new Cash(200.00));
                // cash.setValue(200.00);
                // console.log(cash.getValue());
            }
            }>set</button>
            <Cash value={cash} onUpdate={handleCashUpdate} />
        </div>
    );
}

export default App;
