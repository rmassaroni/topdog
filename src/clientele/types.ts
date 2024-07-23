import { Comp } from "../types";
import Customer from "./Customer";
import { Product } from "../inventory/Product";

export interface iClientele extends Comp {
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
