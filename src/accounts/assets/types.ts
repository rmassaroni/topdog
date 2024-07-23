import { Product } from '../../inventory/Product';
import { iAccount, AccountType } from '../types';

export interface iAsset extends iAccount {
    accountType: AccountType;
}

export interface iCash extends iAsset {
    spendCash(amount: number): boolean;
}

export interface iAccountsReceivable extends iAsset {
}

export interface InventoryType extends iAsset {
    products: Product[];
    buy: (product: Product, quantity: number) => void;
    sell: (index: number) => void;
    panel: () => JSX.Element;
}
