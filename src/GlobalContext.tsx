import React, { createContext, useContext, ReactNode } from 'react';

interface GlobalContextType {
    usd: (value: number) => string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const usd = (value: number): string => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <GlobalContext.Provider value={{ usd }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobal must be used within a GlobalProvider');
    }
    return context;
};

