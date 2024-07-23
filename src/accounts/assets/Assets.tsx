import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account from '../Account';
import { iAccountsReceivable, iAsset, iCash } from './types';

const Asset = (initialValue: number = 0, initialName: string = 'Asset'): iAsset => {
    return {
        ...Account(initialValue, initialName),
        accountType: 'Asset'
    };
};

export const Cash = (initialValue: number = 0): iCash => {
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
        asset.setValue(asset.value - amount);
        return true;
    }
    return {
        ...asset,
        spendCash
    }
}

export const AccountsReceivable = (initialValue: number = 0): iAccountsReceivable => {
    return Asset(initialValue, 'Accounts Receivable');
}

export default Asset;
