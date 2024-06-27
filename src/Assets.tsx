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

    setValue(newVal: number): Asset {
        this.value = newVal;
        return this;
    }


    USD(): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(this.value);
    }
}

export class Cash extends Asset {
    // constructor(value: number) {
    //     super('Cash', value);
    // }
        constructor(props: { value: number; onUpdate: (newValue: number) => void }) {
        super('Cash', props.value);
        this.onUpdate = props.onUpdate;
    }

    private onUpdate: (newValue: number) => void;

    updateValue(newValue: number): void {
        this.setValue(newValue);
        this.onUpdate(newValue);
    }
}

export class AccountsReceivable extends Asset {
    constructor(value: number) {
        super('Accounts Receivable', value);
    }
}
