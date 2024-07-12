import { LiabilityType, TotalType } from './types';
import Account from './Account';
import React, { useState } from 'react';
import { AccountType } from './types';

export const Liability = (initialValue: number = 0, initialName: string = 'Liability'): LiabilityType => {
    return {
        ...Account(initialValue, initialName),
        type: 'Liability'
    };
};

export const AccountsPayable = (initialValue: number = 0): LiabilityType => {
    return {
        ...Liability(initialValue, 'Accounts Payable'),
    }
}

export const TotalLiabilities = (ap: LiabilityType = AccountsPayable(100)): TotalType => {
    const [accounts, setAccounts] = useState<AccountType[]>([ap]);

    const updateAccounts = (newAccounts: AccountType[]): AccountType[] => {
        setAccounts(newAccounts);
        return newAccounts;
    }

    const totalValue = (): number => {
        return accounts.reduce((total, account) => total + account.value, 0);
    }

    const usd = (num: number): string => { //will try to use an existing usd()
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(num);
    }

    const component = () => {
        return (
            <div style={{ width: "50%"}}>
                <h3 style={{ margin: "5px" }}>Liabilities</h3>
                <div className="asset-list" style={{ marginLeft: "0px"}}>
                    <h4 style={{ margin: "5px 5px 5px 5px" }}>Current Liabilities</h4>
                    {ap.component()}
                    <div className="asset-square" style={{ fontWeight: "bold" }}>
                        <div>Total Current Liablities</div>
                        <div>{usd(totalValue())}</div>
                    </div>
                </div>
            </div>
        );
    }

    return {
        component,
        type: 'Liability',
        accounts,
        updateAccounts,
        totalValue
    };
}
