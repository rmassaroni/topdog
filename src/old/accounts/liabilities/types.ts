import { AccountType, iAccount } from '../types';

export interface iLiability extends iAccount {
    accountType: AccountType;
}

export interface iAccountsPayable extends iLiability {
}
