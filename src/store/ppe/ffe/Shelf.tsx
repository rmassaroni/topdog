import { Product } from '../../../inventory/Product';
import { IShelf, iShelfRow } from './types';
import Furniture from './Furniture';
import { useState } from 'react';
import './Shelf.css';
import ShelfRow from './ShelfRow';

const Shelf = (initialValue: number = 0, products: Product[]): IShelf => {
    const [width] = useState<number>(10);
    const [height] = useState<number>(10);
    const [depth] = useState<number>(2);
    const [numShelves, setNumShelves] = useState<number>(5);

    const generateShelves = (): iShelfRow[] => {
        const newShelves = [];
        for (let i = 0; i < numShelves; i++) {
            newShelves.push(ShelfRow(10, height, depth));
        }
        return newShelves;
    }
    const [shelves, setShelves] = useState<iShelfRow[]>(generateShelves());

    const fullView = () => (
        <div className='full-shelf'>
            {shelves.map((row) => (
                <div key={`${row}`}>
                    {row.component()}
                </div>
            ))}
        </div>
    );

    return {
        ...Furniture(initialValue, 'Shelf'),
        products,
        width,
        height,
        depth,
        numShelves,
        setNumShelves,
        fullView
    }
}

export default Shelf;
