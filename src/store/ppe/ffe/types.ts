import { Product } from '../../../inventory/Product';
import { IPPE, PPEType } from '../types';

export type FFEType = 'Furniture' | 'Fixture' | 'Equipment';
export type FurnitureType = 'Shelf' | 'Register';

export interface IFFE extends IPPE {
    ppeType: PPEType;
    ffeType?: FFEType;
};

export interface IFurniture extends IFFE {
    furnitureType?: FurnitureType;
};

export interface IFixture extends IFFE {

};

export interface IEquipment extends IFFE {
    
};

export interface IShelf extends IFurniture {
    products: Product[];
}
