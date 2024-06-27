import './App.css';
import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import {Asset, Cash, AccountsReceivable } from './Assets';


const App: React.FC = () => {
    const cash = new Cash(100.00);
    const receivable = new AccountsReceivable(500.00);


    
    return (
        <div>
            <p>{cash.USD()}</p>
            <p>{receivable.USD()}</p>
        </div>
    );
}

export default App;
