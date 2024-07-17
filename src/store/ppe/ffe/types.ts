import { IPPE, PPEType } from '../types';

export type FFEType = 'Furniture' | 'Fixture' | 'Equipment';

export interface IFFE extends IPPE {
    ppeType: PPEType;
    ffeType?: FFEType;
};

export interface IFurniture extends IFFE {

};

export interface IFixture extends IFFE {

};

export interface IEquipment extends IFFE {
    
};
