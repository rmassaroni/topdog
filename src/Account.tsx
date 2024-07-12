import React from 'react';
import { Comp } from './types';

const Account = (): Comp => {
    
    //line item
    const component = () => {
        return (
            <div>
                <h1>Account</h1>
            </div>
        );
    }

    return {
        component
    };
};

export { Account };
