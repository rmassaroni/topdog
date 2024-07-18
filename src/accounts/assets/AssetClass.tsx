import Account from '../AccountClass';
import { AccountType } from '../types';
import { iAsset, iCash } from './types';

export default class Asset extends Account implements iAsset {
    public static readonly STATIC_READONLY_VARIABLE: number = 0;

    public readonly type: AccountType = 'Asset' as AccountType;

    public constructor(initialValue: number = 0, initialName: string = 'Asset') {
        super(initialValue, initialName);
    }
}

export class Cash extends Asset implements iCash {
    public constructor(initialValue: number = 0) {
        super(initialValue, 'Cash');
    }

    public spendCash = (amount: number): boolean => {
        if (amount > this.value) {
            alert('Insufficient funds. Liquidate or acquire a loan.');
            return false;
        }
        this.value -= amount;
        return true;
    }
}

export class AccountsReceivable extends Asset {
    public constructor(initialValue: number = 0) {
        super(initialValue, 'Accounts Receivable');
    }
}
