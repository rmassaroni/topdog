import { useState } from 'react';
import { Product } from './Product';

const useCounter = (initialCount: number = 0) => {
    const [count, setCount] = useState<number>(initialCount);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    return {
        count,
        increment,
        decrement
    };
};

//will combine asset and usecounter
const Asset = (initialValue: number = 0, initialCount: number = 0, initialName: string = 'Asset') => {
    const { count, increment, decrement } = useCounter(initialCount);
    const [ value, setValue ] = useState<number>(initialValue);
    const [ name, setName ] = useState<string>(initialName);

    const updateValue = (newValue: number) => {
        setValue(newValue);
    };

    const updateName = (newName: string) => {
        setName(newName);
    }

    const usd = (): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    }

    const fullName = (): string => {
        return name + ': ' + usd();
    }

    return {
        name,
        value,
        count,
        increment,
        decrement,
        updateName,
        updateValue,
        usd,
        fullName
    };
};

const Cash = (initialValue: number = 0, initialCount: number = 0) => {
    return {
        ...Asset(initialValue, initialCount, 'Cash'),
    }
}

const Inventory = (initialValue: number = 0, initialCount: number = 0, initialQuantity: number = 0) => {
    const [ quantity, setQuantity ] = useState<number>(initialQuantity);
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
        setProducts(prevProducts => [...prevProducts, product]);
    };

    const removeProduct = (index: number) => {
        setProducts(prevProducts => {
            const updatedProducts = [...prevProducts];
            updatedProducts.splice(index, 1);
            return updatedProducts;
        });
    };

    return {
        ...Asset(initialValue, initialCount, 'Inventory'),
        quantity,
        setQuantity,
        products,
        addProduct,
        removeProduct
    }
}


export { useCounter, Asset, Cash, Inventory };
