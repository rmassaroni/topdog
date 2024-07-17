import { IEquipment } from './types';
import FFE from './FFE';

const Equipment = (initialValue: number = 0): IEquipment => {
    return {
        ...FFE(initialValue, 'Equipment'),
        ffeType: 'Equipment'
    }
}

export default Equipment;
