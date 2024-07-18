import React, { useEffect, useState } from 'react';
import { Product } from '../../../inventory/Product';
import { iItemSpace } from './types';

const ItemSpace = (width: number = 1, height: number = 1, depth: number = 1): iItemSpace => {
    const [items, setItems] = useState<Product[]>([]);
    
    const component = () => (
        <div className='item-space'>item
        </div>
    );

    return { width, height, depth, items, component };
}

export default ItemSpace;
