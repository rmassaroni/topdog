import { useState } from 'react';
import useCounter from './UseCounter';

const Asset = (initialValue: number = 0, initialCount: number = 0) => {
    const { count, increment, decrement } = useCounter(initialCount);
    const [ value, setValue ] = useState<number>(initialValue);
    const [ name, setName ] = useState<string>('Asset');

    const updateValue = (newValue: number) => {
        setValue(newValue);
    };

    const updateName = (newName: string) => {
        setName(newName);
    }

    return {
        name,
        value,
        count,
        increment,
        decrement,
        updateName,
        updateValue,
    };
};

const Cash = (initialValue:number = 0, initialCount: number = 0) => {
    // const { count, increment, decrement, name, updateName, value, updateValue } = Asset(initialValue, initialCount);

    return {
        ...Asset(initialValue, initialCount),
        name: 'Cash'
    }
}

export {Asset, Cash};
