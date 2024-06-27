import { Asset } from './Asset';

export class Cash extends Asset {
    constructor(value: number) {
        super('Cash', value);
    }
}
