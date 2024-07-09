import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AssetType, CashType } from './types';

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

export { Asset, Cash };
