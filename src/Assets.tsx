import { ComponentType, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AssetType, CashType, InventoryType } from './types';
import React from 'react';

const Asset = (initialValue: number = 0, initialName: string = 'Asset'): AssetType => {
    const [ value, setValue ] = useState<number>(initialValue);
    const [ name, setName ] = useState<string>(initialName);

    const updateValue = (newValue: number) => {
        setValue(newValue);
    };

    const updateName = (newName: string) => {
        setName(newName);
    }

    const usd = (num: number = value): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(num);
    }

    const fullName = (): string => {
        return name + ': ' + usd();
    }

    return {
        name,
        value,
        updateName,
        updateValue,
        usd,
        fullName
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

//COMPONENT
const Assets = (cash: CashType, ar: AssetType = AccountsReceivable(), inv: InventoryType) => {
    // const ar = AccountsReceivable();
    const usd = (num: number): string => {
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
                    <div className="asset-square">
                        <div>{cash.name}</div>
                        <div>{cash.usd()}</div>
                    </div>
                    <div className="asset-square">
                        <div>{ar.name}</div>
                        <div>{ar.usd()}</div>
                    </div>
                    <div className="asset-square">
                        <div>Inventory</div>
                        <div>{inv.usd()}</div>
                    </div>
                    <div className="asset-square" style={{ fontWeight: "bold" }}>
                        <div>Total Current Assets</div>
                        <div>{usd(cash.value + ar.value)}</div>
                    </div>
                </div>
            </div>
        )
    };
    return {
        component
    }
}

export { Asset, Assets, Cash, AccountsReceivable};
