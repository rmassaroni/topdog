import { Product } from './Product';

type CompType = {
    component: () => JSX.Element;
}

// type AccountType = CompType & {
//     name: string;
//     value: number;
//     updateName: (newName: string) => void;
//     updateValue: (newValue: number) => void;
//     usd: () => string;
//     fullName: () => string;
// }

type AccountType = 'Asset' | 'Liability' | 'Equity';

// export type Account = AssetAccount | LiabilityAccount | EquityAccount;

export interface Comp {
    component: () => JSX.Element;
}

export interface Account extends Comp {
    type: AccountType;
    name: string;
    value: number;
    updateName: (newName: string) => void;
    updateValue: (newValue: number) => void;
    usd: () => string;
    fullName: () => string;
}

type AssetType = {
    name: string;
    value: number;
    updateName: (newName: string) => void;
    updateValue: (newValue: number) => void;
    usd: () => string;
    fullName: () => string;
}

type CashType = AssetType & {
    spendCash: (amount: number) => boolean;
}

type InventoryType = {
    products: Product[];
    buy: (product: Product, quantity: number) => void;
    sell: (index: number) => void;
    usd: () => string;
    fullName: () => string;
    component: () => JSX.Element;
}

type LiabilityType = {
    name: string;
    value: number;
    exists: boolean;
    updateName: (newName: string) => void;
    updateValue: (newValue: number) => void;
    updateExists: (newExists: boolean) => void;
    usd: () => string;
    fullName: () => string;
}

export type { AssetType, CashType, InventoryType, CompType, LiabilityType };
