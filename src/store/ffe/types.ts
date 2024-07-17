import { AssetType } from '../../types';

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
