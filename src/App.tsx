import './App.css';
import React, { useState, useEffect } from 'react';
import { useCounter, Asset, Cash, Inventory } from './Assets';


const App: React.FC = () => {
    const cash = Cash(100);
    const inv = Inventory();

    return (
        <div>
            <p>{cash.fullName()}</p>
            <p>{inv.fullName()}</p>
            <button
                onClick={inv.buyProduct}
            >Buy Product</button>
        </div>
    );
}

export default App;
