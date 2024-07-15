import React, { useState } from 'react';
import { AccountType } from '../types';
import { USD } from '../utils';

const Account = (initialValue: number = 0, initialName: string = 'Account'): AccountType => {
    const [name, setName] = useState<string>(initialName);
    const [value, setValue] = useState<number>(initialValue);
    const [exists, setExists] = useState<boolean>(initialValue > 0);

    const usd = (val: number = value): string => USD(val);

    const fullName = () => `${name}: ${usd()}`;

    const component = () => (
        <div className="asset-square">
            <div>{name}</div>
            <div>{usd()}</div>
        </div>
    );

    return {
        component,
        name,
        value,
        exists,
        setName,
        setValue,
        setExists,
        usd,
        fullName
        // usd: (val: number = value): string => USD(val),
        // fullName: (): string => `${name}: ${USD(value)}`
    };
};

export default Account;
