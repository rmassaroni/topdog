import { Product } from "../../../inventory/Product";
import { iShelfRow, iItemSpace } from "./types";
import { useState } from 'react';
import ItemSpace from './ItemSpace';

const ShelfRow = (width: number = 10, height: number = 2, depth: number = 2, products: Product[] = []): iShelfRow => {
    const generateSpaces = (): iItemSpace[] => {
        const newSpaces = [];
        for (let i = 0; i < width; i++) {
            newSpaces.push(ItemSpace(1, height, depth));
        }
        return newSpaces;
    }
    const [spaces, setSpaces] = useState<iItemSpace[]>(generateSpaces());

    const component = () => (
        <div 
            className="shelf-row"
            style={{ width: `${width * 50}px`, height: `${height * 10}px` }}>
            {spaces.map((space) => (
                <div key={`${space}`} style={{ display: "flex", flexDirection: "column-reverse" }}>
                    {space.component()}
                </div>
            ))}
        </div>);
    return {width, height, depth, products, component};
}

export default ShelfRow;
    
