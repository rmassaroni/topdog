import { Product } from './Product';

type AssetType = { //interface?
    name: string;
    value: number;
    count: number;
    increment: () => void;
    decrement: () => void;
    updateName: (newName: string) => void;
    updateValue: (newValue: number) => void;
    usd: () => string;
    fullName: () => string;
    spendCash: (amount: number, object: string) => boolean;
}

type InventoryType = {
    products: Product[];
    buy: (product: Product, quantity: number) => void;
    fullName: () => string;
    component: () => JSX.Element;
}


export type { AssetType, InventoryType };
