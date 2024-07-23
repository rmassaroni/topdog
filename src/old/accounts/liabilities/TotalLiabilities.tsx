import React, { useState } from 'react';
import { USD } from '../../utils';
import { iAccount, iTotal } from '../types';
import { iLiability } from './types';


const TotalLiabilities = (ap: iLiability): iTotal => {
    const [accounts, setAccounts] = useState<iAccount[]>([ap]);

    const updateAccounts = (newAccounts: iAccount[]): iAccount[] => {
        setAccounts(newAccounts);
        return newAccounts;
    }

    const totalValue = (): number => {
        return accounts.reduce((total, account) => total + account.value, 0);
    }

    const usd = (val: number = totalValue()): string => USD(val);

    const component = () => {
        return (
            <div style={{ width: "50%"}}>
                <h3 style={{ margin: "5px" }}>Liabilities</h3>
                <div className="asset-list" style={{ marginLeft: "0px"}}>
                    <h4 style={{ margin: "5px 5px 5px 5px" }}>Current Liabilities</h4>
                    {ap.component()}
                    <div className="asset-square" style={{ fontWeight: "bold" }}>
                        <div>Total Current Liablities</div>
                        <div>{usd()}</div>
                    </div>
                </div>
            </div>
        );
    }

    return {
        component,
        accountType: 'Liability',
        accounts,
        updateAccounts,
        totalValue,
        length: () => accounts.length
    };
}

export default TotalLiabilities;
