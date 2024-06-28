import './App.css';
import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { Cash, AccountsReceivable, Inventory } from './Assets';
import useCounter from './Assets';


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
    const [inv, setInv] = useState<Inventory>(new Inventory(10, 100));



    const [stateCash, setStateCash] = useState<number>(2000);

    const [test, setTest] = useState({
        name: 'c',
        value: 100
    });


    const { state, increment, decrement } = useCounter();

    const counter1 = useCounter();

    return (
        <div>
        <p>{cash.fullName()}</p>
        <p>{accRec.fullName()}</p>
        <p>{inv.getQuantity()}</p>
        <p>{test.value}</p>
        <button onClick={() => {
            setCash(cash.setValue(300.0));
            setInv(inv.setQuantity(inv.getQuantity() - 1));

            setTest({ ...test, value: 200 }); //other state vars are only updating if this one is updating
        }}>set</button>
        <p>Count: {state.count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <p>Count: {counter1.state.count}</p>
        <button onClick={counter1.increment}>Increment</button>
        <button onClick={counter1.decrement}>Decrement</button>
        </div>
    );
}
// <p>{receivable.USD()}</p>
// <Cash value={cash} onUpdate={handleCashUpdate} />
export default App;
