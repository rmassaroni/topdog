import { Product } from './inventory/Product';
import Customer from './clientele/Customer';
export interface Comp {
    component: () => JSX.Element;
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
