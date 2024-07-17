import React from 'react';
import { Product } from '../inventory/Product';
import { IShelf } from './types';

const Shelf = (products: Product[]): IShelf => {
    const component = () => (
            <div></div>
    );

    return {
        component,
        products
    }
}

export default Shelf;
