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

// export default Asset;


const Cash = (initialValue:number = 0, initialCount: number = 0, varName: string = 'Cash') => {
    const { count, increment, decrement, value, updateValue } = Asset(initialValue, initialCount);

    const [name, setName] = useState<string>(varName);

    return {
        value,
        count,
        name,
        increment,
        decrement,
        updateValue
    }
}

export {Asset, Cash};
