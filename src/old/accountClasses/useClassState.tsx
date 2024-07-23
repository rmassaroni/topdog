import { useState, useCallback } from 'react';

export const useClassState = <T,>(initialInstance: T): [T, (newState: Partial<T>) => void] => {
    const [instance, setInstance] = useState<T>(initialInstance);

    const setInstanceState = useCallback((newState: Partial<T>) => {
        setInstance((prevInstance) => {
            const updatedInstance = { ...prevInstance, ...newState };
            return updatedInstance;
        });
    }, []);

    return [instance, setInstanceState];
};

