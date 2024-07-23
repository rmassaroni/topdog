import { iAsset } from "../accounts/assets/types";
import { Product } from "./Product";

export interface iInventory extends iAsset {
    products: Product[];
    // manager: boolean;
    // autoMarkup: number;
    // autoSell: boolean;
    // capacity: number;
    // getTotalStock: () => number;
    usd: (val: number) => string;
    buy: (product: Product, quantity: number) => void;
    sell: (index: number) => void;
    panel: () => JSX.Element;

}
