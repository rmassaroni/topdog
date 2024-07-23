import Account from '../Account';
import { iLiability, iAccountsPayable } from './types';

const Liability = (initialValue: number = 0, initialName: string = 'Liability'): iLiability => {
    return {
        ...Account(initialValue, initialName),
        accountType: 'Liability'
    };
};

export const AccountsPayable = (initialValue: number = 0): iAccountsPayable => {
    return {
        ...Liability(initialValue, 'Accounts Payable'),
    }
}

export default Liability;
