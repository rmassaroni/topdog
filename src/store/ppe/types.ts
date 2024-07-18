import { AssetType } from '../../types';

export type PPEType = 'Property' | 'Plant' | 'FFE';

export interface IPPE extends AssetType {
    ppeType?: PPEType;
};

export interface IProperty extends IPPE {
    ppeType: 'Property';
};

export interface IPlant extends IPPE {
    ppeType: 'Plant';
};
