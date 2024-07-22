export type AccountType = 'Asset' | 'Liability' | 'Equity';
export type DueType = 'Current' | 'Long-term';

export interface iAccount {
    accountType?: AccountType;
    dueType?: DueType;
    name: string;
    value: number;
    usd(val: number): string;
    exists(): boolean;
    fullName(): string;
    component(): JSX.Element;
}

export interface iTotal extends iAccount {
    accountType: AccountType;
    accounts: iAccount[];
    updateAccounts: (newAccounts: iAccount[]) => iAccount[];
    totalValue: () => number;
    length: () => number;
}
