import React, { useState } from 'react';
import { USD } from '../../utils';
import { iAccount, iTotal } from '../types';
import { iCash, iAccountsReceivable, iAsset } from './types';
import '../../App.css'


const TotalAssets = (cash: iCash, ar: iAccountsReceivable, inv: iAsset): iTotal => {
    const [accounts, setAccounts] = useState<iAccount[]>([cash, ar, inv]);

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
            <div style={{ width: "50%" }}>
                <h3 style={{ margin: "5px" }}>Assets</h3>
                <div className="asset-list" style={{ marginLeft: "0px"}}>
                    <h4 style={{ margin: "5px 5px 5px 5px" }}>Current Assets</h4>
                    {cash.component()}
                    {ar.component()}
                    {inv.component()}
                    <div className="asset-square" style={{ fontWeight: "bold" }}>
                        <div>Total Current Assets</div>
                        <div>{usd()}</div>
                    </div>
                </div>
            </div>
        )
    };
    return {
        accountType: 'Asset',
        component,
        accounts,
        updateAccounts,
        totalValue,
        length: () => accounts.length
    }
}

export default TotalAssets;
