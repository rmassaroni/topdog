import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';

export class Asset {
    protected name: string;
    protected value: number;

    // const [v, setV] = useState<number>(0);

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    getName(): string {
        return this.name;
    }

    getValue(): number {
        return this.value;
    }

    setValue(newVal: number): this {
        this.value = newVal;
        return this;
    }

    USD(): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(this.value);
    }

    fullName(): string {
        return this.name + ': ' + this.USD();
    }
}

export class Cash extends Asset {
    constructor(value: number) {
        super('Cash', value);
    }
    //     constructor(props: { value: number; onUpdate: (newValue: number) => void }) {
    //     super('Cash', props.value);
    //     this.onUpdate = props.onUpdate;
    // }
    //
    // private onUpdate: (newValue: number) => void;
    //
    // updateValue(newValue: number): void {
    //     this.setValue(newValue);
    //     this.onUpdate(newValue);
    // }
}

export class AccountsReceivable extends Asset {
    constructor(value: number) {
        super('Accounts Receivable', value);
    }
}

export class Inventory extends Asset {
    protected quantity: number;

    constructor(value: number, quantity: number = 1) {
        super('Inventory', value);
        this.quantity = quantity;
    }

    getQuantity(): number {
        return this.quantity;
    }

    setQuantity(newQuantity: number): this {
        this.quantity = newQuantity;
        return this;
    }
}

interface CounterState {
    count: number;
}

const useCounter = () => {
    const [state, setState] = useState<CounterState>({ count: 0 });

    const increment = () => setState(prevState => ({ count: prevState.count + 1 }));
    const decrement = () => setState(prevState => ({ count: prevState.count - 1 }));

    return {
        state,
        increment,
        decrement
    };
};

export default useCounter;
