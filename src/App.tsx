import './App.css';
import React, { useState } from 'react';
import {useCounter, Asset, Cash} from './Assets';


const App: React.FC = () => {
    const asset = useCounter(100);
    const cash = Asset(100, 100);
    const cash2 = Cash();

    return (
        <div>
        <button onClick={() => {

        }}>set</button>

        <p>Count: {asset.count}</p>
        <button onClick={asset.increment}>Increment</button>
        <button onClick={asset.decrement}>Decrement</button>
        <p>{cash.count}</p>
        <button onClick={cash.increment}>Increment</button>
        <button onClick={cash.decrement}>Decrement</button>

        <p>{cash2.name}</p>
        <p>{cash.usd()}</p>
        </div>
    );
}

export default App;
