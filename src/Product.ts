export class Product {
    private name: string;
    private value: number;
    private icon: string;
    private inStock: number;
    private marketStock: number;
    private marketValue: number;
    private demand: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
        this.icon = '🍔';
        this.inStock = 0;
        this.marketStock = 1000;
        this.marketValue = value;
        this.demand = 0;
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

    usd(num: number = this.value): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(num);
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

    getInStock(): number {
        return this.inStock;
    }

    setInStock(newInStock: number): void {
        this.inStock = newInStock;
    }

    getMarketStock(): number {
        return this.marketStock;
    }

    setMarketStock(newMarketStock: number): void {
        this.marketStock = newMarketStock;
    }

    buyOne() {
        if (this.marketStock > 0) {
            this.marketStock -= 1;
            this.inStock += 1;
        }
    }

    getMarketValue(): number {
        return this.marketValue;
    }

    getDemand(): number {
        return this.demand;
    }
}

