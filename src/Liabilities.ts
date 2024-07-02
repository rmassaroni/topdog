import { useState } from 'react';

interface LiabilityType {
    name: string;
    value: number;
    count: number;
    exists: boolean;
    increment: () => void;
    decrement: () => void;
    updateName: (newName: string) => void;
    updateValue: (newValue: number) => void;
    updateExists: (newExists: boolean) => void;
    usd: () => string;
    fullName: () => string;
}

const useCounter = (initialCount: number = 0) => {
    const [count, setCount] = useState<number>(initialCount);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    return {
        count,
        increment,
        decrement
    };
};

const Liability = (initialValue: number = 0, initialCount: number = 0, initialName: string = 'Liability') => {
    const { count, increment, decrement } = useCounter(initialCount);
    const [ value, setValue ] = useState<number>(initialValue);
    const [ name, setName ] = useState<string>(initialName);
    const [exists, setExists] = useState<boolean>(false);

    const updateValue = (newValue: number) => {
        setValue(newValue);
    };

    const updateName = (newName: string) => {
        setName(newName);
    }

    const updateExists = (newExists: boolean) => {
        setExists(newExists);
    }

    const usd = (): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    }

    const fullName = (): string => {
        return name + ': ' + usd();
    }

    return {
        name,
        exists,
        value,
        count,
        increment,
        decrement,
        updateName,
        updateValue,
        updateExists,
        usd,
        fullName
    };
};

const AccountsPayable = (initialValue: number = 0, initialCount: number = 0): LiabilityType => {
    return {
        ...Liability(initialValue, initialCount, 'Accounts Payable'),
    }
}

export type { LiabilityType };
export { Liability, AccountsPayable };
