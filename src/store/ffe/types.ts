import { AssetType } from '../../types';

export type PPEType = 'Property' | 'Plant' | 'FFE';

export interface IPPE extends AssetType {
    ppeType?: PPEType;
};

export interface IProperty extends IPPE {
    ppeType: PPEType;
};

export interface IPlant extends IPPE {
    ppeType: PPEType;
};

export interface IFFE extends IPPE {
    ppeType: PPEType;
};

export interface IFurniture extends IFFE {

};

export interface IFixture extends IFFE {

};

export interface IEquipment extends IFFE {
    
};
