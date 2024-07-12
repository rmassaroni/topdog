import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account from './Account';
import { AccountType, AssetType, CashType, InventoryType, TotalType } from './types';

const Asset = (initialValue: number = 0, initialName: string = 'Asset'): AssetType => {
    return {
        ...Account(initialValue, initialName),
        type: 'Asset'
    };
};

const Cash = (initialValue: number = 0): CashType => {
    const asset = Asset(initialValue, 'Cash');
    const spendCash = (amount: number): boolean => {
        if (amount > asset.value) {
            toast.error('Insufficient funds. Liquidate or acquire a lone.', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        }
        asset.updateValue(asset.value - amount);
        return true;
    }
    return {
        ...asset,
        spendCash
    }
}

const AccountsReceivable = (initialValue: number = 0): AssetType => {
    return Asset(initialValue, 'Accounts Receivable');
}

const TotalAssets = (cash: CashType, ar: AssetType = AccountsReceivable(), inv: InventoryType): TotalType => {
    const [accounts, setAccounts] = useState<AccountType[]>([cash, ar, inv]);

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
            <div style={{ width: "50%" }}>
                <h3 style={{ margin: "5px" }}>Assets</h3>
                <div className="asset-list" style={{ marginLeft: "0px"}}>
                    <h4 style={{ margin: "5px 5px 5px 5px" }}>Current Assets</h4>
                    {cash.component()}
                    {ar.component()}
                    {inv.component()}
                    <div className="asset-square" style={{ fontWeight: "bold" }}>
                        <div>Total Current Assets</div>
                        <div>{usd(totalValue())}</div>
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
        totalValue
    }
}

export { Asset, TotalAssets, Cash, AccountsReceivable };
