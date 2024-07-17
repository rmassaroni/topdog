import Asset from '../accounts/assets/Assets';
import { IEquipment } from './types';

const Equipment = (): IEquipment => {
    return Asset(0, 'Equipment');
}

export default Equipment;
