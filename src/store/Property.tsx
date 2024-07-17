import Asset from '../accounts/assets/Assets';
import { IProperty } from './types';

const Property = (): IProperty => {
    return Asset(0, 'Property');
}

export default Property;
