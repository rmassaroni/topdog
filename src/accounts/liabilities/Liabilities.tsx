import Account from '../Account';
import { iLiability, iAccountsPayable } from './types';
import { iCash } from '../assets/types';

const Liability = (initialValue: number = 0, initialName: string = 'Liability'): iLiability => {
    return {
        ...Account(initialValue, initialName),
        accountType: 'Liability'
    };
};

export const AccountsPayable = (initialValue: number = 0): iAccountsPayable => {
    const liability = Liability(initialValue, 'Accounts Payable');
    const handleLoan = (cash: iCash, loanAmount: number = 100) => {
        cash.setValue(cash.value + loanAmount);
        liability.setValue(liability.value + loanAmount);
    }
    return {
        ...liability,
        handleLoan
    }
}

export default Liability;
