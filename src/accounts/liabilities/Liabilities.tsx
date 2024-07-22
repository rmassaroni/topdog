import Account from '../Account';
import { iAsset } from '../assets/types';

const Liability = (initialValue: number = 0, initialName: string = 'Liability'): iAsset => {
    return {
        ...Account(initialValue, initialName),
        type: 'Liability'
    };
};

export const AccountsPayable = (initialValue: number = 0): iAsset => {
    return {
        ...Liability(initialValue, 'Accounts Payable'),
    }
}

export default Liability;
