import './App.css';
import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';



const App: React.FC = () => {
    const [cash, setCash] = useState<number>(100.00);
    const [debt, setDebt] = useState<number>(1000.00);

    const USD = (value: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    };
    
    return (
        <div>
            <p>{"Cash: " + USD(cash)}</p>
            <p>{"Debt: " + USD(debt)}</p>
        </div>
    );
}

export default App;
