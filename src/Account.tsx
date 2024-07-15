import React, { useState } from 'react';
import { AccountType } from './types';
import { USD } from './utils';

const Account = (initialValue: number = 0, initialName: string = 'Account'): AccountType => {

    const [name, setName] = useState<string>(initialName);
    const [value, setValue] = useState<number>(initialValue);
    const [exists, setExists] = useState<boolean>(initialValue > 0);

    const updateName = (newName: string): string => {
        setName(newName);
        return newName;
    }

    const updateValue = (newValue: number): number => {
        setValue(newValue);
        return newValue;
    }

    const updateExists = (newExists: boolean): boolean => {
        setExists(newExists);
        return newExists;
    }

    const usd = (val: number = value): string => USD(val);

    const fullName = () => {
        return `${name}: ${usd()}`;
    }

    const component = () => {
        return (
            <div className="asset-square">
                <div>{name}</div>
                <div>{usd()}</div>
            </div>
        );
    }

    return {
        component,
        name,
        value,
        exists,
        updateName,
        updateValue,
        updateExists,
        usd,
        fullName,
    };
};

export default Account;
