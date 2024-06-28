import './App.css';
import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
// import { Cash, AccountsReceivable, Inventory } from './Assets';
import useCounter from './UseCounter';
import {Asset, Cash} from './Asset';


const App: React.FC = () => {
    // // const cash = new Cash(100.00);
    // // const [cash, setCash] = useState<Cash>(new Cash(100.00));
    // const [cash, setCash] = useState<number>(100.00);
    //
    // const handleCashUpdate = (newValue: number) => {
    //     setCash(newValue);
    // };
    // const receivable = new AccountsReceivable(500.00);

    // const [cash, setCash] = useState<Cash>(new Cash(100.00));
    // const [accRec, setAccRec] = useState<AccountsReceivable>(new AccountsReceivable(50));
    // const [inv, setInv] = useState<Inventory>(new Inventory(10, 100));


    // const cash = new Cash(1000);

    // const [stateCash, setStateCash] = useState<number>(2000);

    const [test, setTest] = useState({
        name: 'c',
        value: 100
    });


    // const { state, increment, decrement } = useCounter();

    const counter1 = useCounter(100);

    const cash = Asset(100, 100);

    const cash2 = Cash();

    return (
        <div>
        <p>{test.value}</p>
        <button onClick={() => {

            setTest({ ...test, value: 200 }); //other state vars are only updating if this one is updating
        }}>set</button>

        <p>Count: {counter1.count}</p>
        <button onClick={counter1.increment}>Increment</button>
        <button onClick={counter1.decrement}>Decrement</button>
        <p>{cash.count}</p>
        <button onClick={cash.increment}>Increment</button>
        <button onClick={cash.decrement}>Decrement</button>

        <p>{cash2.name}</p>
        </div>
    );
}
        // <p>Count: {state.count}</p>
        // <button onClick={increment}>Increment</button>
        // <button onClick={decrement}>Decrement</button>
        // <p>Count: {counter1.state.count}</p>
// <p>{receivable.USD()}</p>
// <Cash value={cash} onUpdate={handleCashUpdate} />
export default App;
