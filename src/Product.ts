export class Product {
    private name: string;
    private value: number;
    private icon: string;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
        this.icon = '🍔';
    }

    getName(): string {
        return this.name;
    }

    getValue(): number {
        return this.value;
    }

    setValue(newValue: number): void {
        this.value = newValue;
    }

    usd(): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(this.value);
    }

    fullName(): string {
        return `${this.name}: ${this.usd()}`;
    }

    getIcon(): string {
        return this.icon;
    }

    setIcon(icon: string): void {
        this.icon = icon;
    }
}

