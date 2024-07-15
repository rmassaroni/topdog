import { Product } from './Product';
import { Customer } from './/clientele/Clientele';

type typeOfAccount = 'Asset' | 'Liability' | 'Equity';
type typeOfAsset = 'Cash' | 'Inventory' | 'Accounts Receivable';
type typeOfLiability = 'Accounts Payable' | 'Loans Payable';

export interface Comp {
    component: () => JSX.Element;
}

export interface AccountType extends Comp {
    type?: typeOfAccount;
    name: string;
    value: number;
    exists: boolean;
    updateName: (newName: string) => string;
    updateValue: (newValue: number) => number;
    updateExists: (newExists: boolean) => boolean;
    usd: (val: number) => string;
    fullName: () => string;
}

export interface AssetType extends AccountType {
    type: typeOfAccount;
}

export interface CashType extends AssetType {
    spendCash: (amount: number) => boolean;
}

export interface InventoryType extends AssetType {
    products: Product[];
    buy: (product: Product, quantity: number) => void;
    sell: (index: number) => void;
    panel: () => JSX.Element;
}

export interface LiabilityType extends AccountType {
    type: typeOfAccount;
}

export interface TotalType extends Comp {
    type: typeOfAccount;
    accounts: AccountType[];
    updateAccounts: (newAccounts: AccountType[]) => AccountType[];
    totalValue: () => number;
    length: () => number;
}

export interface ClienteleType extends Comp {
    storePopularity: number;
    setStorePopularity: (value: number) => void;
    currentCustomers: Customer[];
}

export interface IConsumer {
    name: string;
    imageUrl: string;
}

export interface ICustomer extends IConsumer {
    spree: number;
    attemptedProducts: { product: Product, bought: boolean }[];
}
