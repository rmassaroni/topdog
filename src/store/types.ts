import { Comp, AssetType } from '../types';
import { Product } from '../inventory/Product';

export type ChunkType = 'shelf' | 'cash register' | 'door' | 'empty';
export type WallType = 'empty' | 'wall' | 'door';
export type ShelfLocation = 'none' | 'top' | 'bottom' | 'left' | 'right';
export type ItemType = 'shelf' | 'cash register' | 'door' | 'empty';

export interface IChunk extends Comp {
    length: number;
    width: number;
    empty: boolean;
    type?: ChunkType;
    walls: WallType[];
    shelfLocation: ShelfLocation;
}

export interface IStore extends Comp {
    chunks: IChunk[][];
    width: number;
    length: number;
}

export interface IShelf extends Comp {
    products: Product[];
}

export interface IPPE extends AssetType {

};

export interface IProperty extends IPPE {

};

export interface IPlant extends IPPE {

};

export interface IFFE extends IPPE {
    
};

export interface IFurniture extends IFFE {

};

export interface IFixture extends IFFE {

};

export interface IEquipment extends IFFE {
    
};
