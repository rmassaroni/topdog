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

export * from './accounts/types';
export * from './accounts/assets/types';
export * from './accounts/liabilities/types';
export * from './inventory/types';
export * from './clientele/types';
