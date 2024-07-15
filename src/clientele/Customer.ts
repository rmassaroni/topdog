import { Product } from '../inventory/Product';
import Consumer from './Consumer';
import { ICustomer } from '../types';

class Customer extends Consumer implements ICustomer {
    private _spree: number;
    private _attemptedProducts: { product: Product, bought: boolean }[];

    constructor(name: string = 'Customer') {
        super(name);
        this._spree = this.generateSpree();
        this._attemptedProducts = [];
    }

    private generateSpree(): number {
        const p = 0.75;
        let count = 1;
        while (Math.random() < p) {
            count++;
        }
        return count;
    }

    public get spree(): number {
        return this._spree;
    }

    public tryBuy(product: Product): boolean {
        const randomValue = Math.random();
        const bought = randomValue <= product.getDemand();
        this.attemptedProducts.push({ product, bought });
        if (bought) {
            console.log(`${this.name} bought ${product.getName()} with demand ${product.getDemand()}.`);
            return true;
        } else {
            console.log(`${this.name} did not buy ${product.getName()} with demand ${product.getDemand()}.`);
            return false;
        }
    }

    public get attemptedProducts(): { product: Product, bought: boolean }[] {
        return this._attemptedProducts;
    }
}

export default Customer;
