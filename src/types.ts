import { Product } from './Product';

// type ComponentType = () => JSX.Element;
type AssetsType = {
    cash: CashType;
    component: () => JSX.Element;
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

export type { AssetType, CashType, InventoryType, AssetsType};
