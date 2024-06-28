import './App.css';
import React, { useState } from 'react';
import { useCounter, Asset, Cash, Inventory } from './Assets';


const App: React.FC = () => {
    const cash = Cash();
    const inv = Inventory();

    return (
        <div>
            <p>{cash.fullName()}</p>
        </div>
    );
}

export default App;
