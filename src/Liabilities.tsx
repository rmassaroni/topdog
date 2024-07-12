import { useState } from 'react';

// interface LiabilityType {
//     name: string;
//     value: number;
//     count: number;
//     exists: boolean;
//     increment: () => void;
//     decrement: () => void;
//     updateName: (newName: string) => void;
//     updateValue: (newValue: number) => void;
//     updateExists: (newExists: boolean) => void;
//     usd: () => string;
//     fullName: () => string;
// }
//
const Liability = (initialValue: number = 0, initialCount: number = 0, initialName: string = 'Liability') => {
    const [ value, setValue ] = useState<number>(initialValue);
    const [ name, setName ] = useState<string>(initialName);
    const [exists, setExists] = useState<boolean>(false);

    const updateValue = (newValue: number) => {
        setValue(newValue);
    };

    const updateName = (newName: string) => {
        setName(newName);
    }

    const updateExists = (newExists: boolean) => {
        setExists(newExists);
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
        exists,
        value,
        updateName,
        updateValue,
        updateExists,
        usd,
        fullName
    };
};

const AccountsPayable = (initialValue: number = 0, initialCount: number = 0) => {
    return {
        ...Liability(initialValue, initialCount, 'Accounts Payable'),
    }
}

const Liabilities = () => {
    const component = () => {
        const accountsPayable = AccountsPayable(1000, 1);

        return (
            <div style={{ width: "50%"}}>
                <h3 style={{ margin: "5px" }}>Liabilities</h3>
                <div className="asset-list" style={{ marginLeft: "0px"}}>
                    <h4 style={{ margin: "5px 5px 5px 5px" }}>Current Liabilities</h4>
                    <div className="asset-square">
                        <div>{accountsPayable.name}</div>
                        <div>{accountsPayable.usd()}</div>
                    </div>
                    <div className="asset-square" style={{ fontWeight: "bold" }}>
                        <div>Total Current Liablities</div>
                        <div>{accountsPayable.usd()}</div>
                    </div>
                </div>
            </div>
        );
    }
    return {
        component
    };
}

// export type { LiabilityType };
export { Liability, AccountsPayable, Liabilities };
