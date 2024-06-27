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
}
