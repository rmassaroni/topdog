import './App.css';
import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { Cash, AccountsReceivable } from './Assets';


const App: React.FC = () => {
    // // const cash = new Cash(100.00);
    // // const [cash, setCash] = useState<Cash>(new Cash(100.00));
    // const [cash, setCash] = useState<number>(100.00);
    //
    // const handleCashUpdate = (newValue: number) => {
    //     setCash(newValue);
    // };
    // const receivable = new AccountsReceivable(500.00);

    const [cash, setCash] = useState<Cash>(new Cash(100.00));
    const [accRec, setAccRec] = useState<AccountsReceivable>(new AccountsReceivable(50));

    const [test, setTest] = useState({
        name: 'c',
        value: 100
    });
    
    
    return (
        <div>
            <p>{cash.USD()}</p>
            <p>{accRec.USD()}</p>
            <p>{test.value}</p>
            <button onClick={() => {
                setCash(cash.setValue(300.0));

                setTest({ ...test, value: 200 }); //other state vars are only updating if this one is updating
            }}>set</button>
        </div>
    );
}
 // <p>{receivable.USD()}</p>
// <Cash value={cash} onUpdate={handleCashUpdate} />
export default App;
