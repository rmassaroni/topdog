import React, { useState } from 'react';
import { AccountType, LiabilityType, TotalType } from '../../types';
import { USD } from '../../utils';


const TotalLiabilities = (ap: LiabilityType): TotalType => {
    const [accounts, setAccounts] = useState<AccountType[]>([ap]);

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
        type: 'Liability',
        accounts,
        updateAccounts,
        totalValue,
        length: () => accounts.length
    };
}

export default TotalLiabilities;
