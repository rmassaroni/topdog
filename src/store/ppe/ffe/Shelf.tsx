import { Product } from '../../../inventory/Product';
import { IShelf } from './types';
import Furniture from './Furniture';

const Shelf = (initialValue: number = 0, products: Product[]): IShelf => {
    return {
        ...Furniture(initialValue, 'Shelf'),
        products
    }
}

export default Shelf;
