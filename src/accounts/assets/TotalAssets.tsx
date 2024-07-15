import React, { useState } from 'react';
import { USD } from '../../utils';
import { AccountType, AssetType, CashType, InventoryType, TotalType } from '../../types';


const TotalAssets = (cash: CashType, ar: AssetType, inv: InventoryType): TotalType => {
    const [accounts, setAccounts] = useState<AccountType[]>([cash, ar, inv]);

    const updateAccounts = (newAccounts: AccountType[]): AccountType[] => {
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
        type: 'Asset',
        component,
        accounts,
        updateAccounts,
        totalValue,
        length: () => accounts.length
    }
}

export default TotalAssets;
