import Asset from '../accounts/assets/Assets';
import { IPPE, IProperty } from './types';

const PPE = (): IPPE => {
    return Asset(0, 'PPE');
}

export const Property = (): IProperty => {
    return Asset(0, 'Property');
}

export default PPE;
