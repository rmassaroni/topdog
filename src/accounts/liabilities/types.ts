import { AccountType, iAccount } from '../types';
import { iCash } from '../assets/types';

export interface iLiability extends iAccount {
    accountType: AccountType;
}

export interface iAccountsPayable extends iLiability {
    handleLoan: (cash: iCash, loanAmount: number) => void;
}
