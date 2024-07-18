import React from 'react';
import './Store.css';
import { Product } from '../inventory/Product';
import { ICustomer } from '../types';

interface CustomerProps {
    position: { row: number; col: number };
    style?: React.CSSProperties;
}

export default class Customer extends React.Component<CustomerProps> implements ICustomer {
    private _name: string;
    private _imageUrl: string;
    private _spree: number;
    private _attemptedProducts: { product: Product, bought: boolean }[];

    constructor(props: CustomerProps, name: string = 'Customer') {
        super(props);
        this._name = name;
        this._imageUrl = "/dog.png";
        this._spree = this.generateSpree();
        this._attemptedProducts = [];
    }

    public get name(): string { return this._name; }
    public get imageUrl(): string { return this._imageUrl; }
    public get spree(): number { return this._spree; }
    public get attemptedProducts(): { product: Product, bought: boolean }[] { return this._attemptedProducts; }

    private generateSpree(): number {
        let p: number = 0.75, count: number = 1;
        while (Math.random() < p) count++;
        return count;
    }

    public tryBuy(product: Product): boolean {
        const randomValue: number = Math.random();
        const bought: boolean = randomValue <= product.getDemand();
        this._attemptedProducts.push({ product, bought });
        if (bought) {
            console.log(`${this._name} bought ${product.getName()} with demand ${product.getDemand()}.`);
            return true;
        }
        console.log(`${this._name} did not buy ${product.getName()} with demand ${product.getDemand()}.`);
        return false;
    }

    public render() {
        const { position, style } = this.props;
        return (
            <div
                className="customer"
                style={{
                    ...style,
                    gridRow: position.row + 1,
                    gridColumn: position.col + 1,
                }}
            >
            </div>
        );
    }
}
