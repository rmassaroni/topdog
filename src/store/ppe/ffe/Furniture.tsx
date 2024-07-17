import FFE from './FFE';
import { FurnitureType, IFurniture } from './types';

const Furniture = (initialValue: number = 0, furnitureType?: FurnitureType): IFurniture => {
    return {
        ...FFE(initialValue, 'Furniture'),
        ffeType: 'Furniture',
        furnitureType
    }
}

export default Furniture;
