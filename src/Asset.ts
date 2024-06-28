import { useState } from 'react';
import useCounter from './UseCounter';

const Asset = (initialValue:number = 0, initialCount: number = 0) => {
    // const [count, setCount] = useState<number>(initialCount);
    const { count, increment, decrement } = useCounter(initialCount);
    const [value, setValue] = useState<number>(initialValue);

    const updateValue = (newValue: number) => {
        setValue(newValue);
    };

    return {
        value,
        count,
        increment,
        decrement,
        updateValue
    };
};

export default Asset;

