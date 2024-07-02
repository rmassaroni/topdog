import { useState } from 'react';
import { Product } from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AssetType {
    name: string;
    value: number;
    count: number;
    increment: () => void;
    decrement: () => void;
    updateName: (newName: string) => void;
    updateValue: (newValue: number) => void;
    usd: () => string;
    fullName: () => string;
    spendCash: (amount: number) => boolean;
}

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

const Cash = (initialValue: number = 0, initialCount: number = 0): AssetType => {
    const asset = Asset(initialValue, initialCount, 'Cash');
    const spendCash = (amount: number): boolean => {
        if (amount > asset.value) {
            toast.error('Insufficient funds. Acquire a lone.', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        }
        asset.updateValue(asset.value - amount);
        return true;
    }
    return {
        ...asset,
        spendCash
    }
}

const Inventory = (initialValue: number = 0, initialCount: number = 0, initialQuantity: number = 0) => {
    const asset = Asset(initialValue, initialCount, 'Inventory');
    const [ quantity, setQuantity ] = useState<number>(initialQuantity);
    const [ products, setProducts ] = useState<Product[]>([]);

    const buyProduct = () => {
        // setProducts(prevProducts => [...prevProducts, product]);
        setQuantity(prevQ => prevQ + 1);
    };

    const sellProduct = () => {
        // setProducts(prevProducts => {
        //     const updatedProducts = [...prevProducts];
        //     updatedProducts.splice(index, 1);
        //     return updatedProducts;
        // });
        setQuantity(prevQ => prevQ - 1);
    };

    const fullName = (): string => {
        return `${asset.fullName()}, quantity: ${quantity}`;
    };

    return {
        ...asset,
        quantity,
        setQuantity,
        products,
        buyProduct,
        sellProduct,
        fullName
    }
}

export type { AssetType };
export { useCounter, Asset, Cash, Inventory };
