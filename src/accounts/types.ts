
export type AccountType = 'Asset' | 'Liability' | 'Equity';
export type DueType = 'Current' | 'Long-term';

export interface iAccount {
    name: string;
    value: number;
    accountType?: AccountType;
    dueType?: DueType;
    setName: (newName: string) => void;
    setValue: (newValue: number) => void;
    usd(val: number): string;
    fullName: () => string;
    exists: () => boolean;
    component: () => JSX.Element;
}

// export interface iTotal extends iAccount {
//     accountType: AccountType;
//     accounts: iAccount[];
//     updateAccounts: (newAccounts: iAccount[]) => iAccount[];
//     totalValue: () => number;
//     length: () => number;
// }

export interface iTotal {
    accountType: AccountType;
    accounts: iAccount[];
    updateAccounts: (newAccounts: iAccount[]) => iAccount[];
    totalValue: () => number;
    length: () => number;
    component: () => JSX.Element;
}
