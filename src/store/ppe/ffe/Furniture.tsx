import FFE from './FFE';
import { IFurniture } from './types';

const Furniture = (initialValue: number = 0): IFurniture => {
    return {
        ...FFE(initialValue, 'Furniture'),
        ffeType: 'Furniture'
    }
}

export default Furniture;
