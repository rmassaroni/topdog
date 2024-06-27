export class Asset {
    protected name: string;
    protected value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    getName(): string {
        return this.name;
    }

    USD(): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(this.value);
    }
}

export class Cash extends Asset {
    constructor(value: number) {
        super('Cash', value);
    }
}

export class AccountsReceivable extends Asset {
    constructor(value: number) {
        super('Accounts Receivable', value);
    }
}
