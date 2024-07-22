import React, { useState } from 'react';
import { iAccount } from './types';
import { USD } from '../utils';

const Account = (initialValue: number = 0, initialName: string = 'Account'): iAccount => {
    const [name, setName] = useState<string>(initialName);
    const [value, setValue] = useState<number>(initialValue);

    const usd = (val: number = value): string => USD(val);

    const fullName = () => `${name}: ${usd()}`;

    const exists = (): boolean => value > 0;

    const component = () => (
        <div className="asset-square">
            <div>{name}</div>
            <div>{usd()}</div>
        </div>
    );

    return {
        component,
        name, setName,
        value, setValue,
        exists,
        usd,
        fullName
    };
};

export default Account;


