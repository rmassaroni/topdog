import { iAccount, AccountType } from '../types';

export interface iAsset extends iAccount {
    type: AccountType;
}

export interface iCash extends iAsset {
    spendCash(amount: number): boolean;
}

export interface iAccountsReceivable extends iAsset {
}
