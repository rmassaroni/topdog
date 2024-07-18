import { Product } from '../../../inventory/Product';
import { Comp } from '../../../types';
import { IPPE, PPEType } from '../types';

export type FFEType = 'Furniture' | 'Fixture' | 'Equipment';
export type FurnitureType = 'Shelf' | 'Register';

export interface IFFE extends IPPE {
    ppeType: 'FFE';
    ffeType?: FFEType;
};

export interface IFurniture extends IFFE {
    ffeType: 'Furniture';
    furnitureType?: FurnitureType;
};

export interface IFixture extends IFFE {
    ffeType: 'Fixture';
};

export interface IEquipment extends IFFE {
    ffeType: 'Equipment';
};

export interface IShelf extends IFurniture {
    width: number;
    height: number;
    depth: number;
    products: Product[];
    numShelves: number;
    setNumShelves: (numShelves: number) => void;
    fullView: () => JSX.Element;
}

export interface iShelfRow extends Comp {
    width: number;
    height: number;
    depth: number;
    products?: Product[];
}
    
export interface iItemSpace extends Comp {
    width: number;
    height: number;
    depth: number;
    items: Product[];
}
