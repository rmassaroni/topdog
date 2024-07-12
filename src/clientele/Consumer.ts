import { IConsumer } from '../types';

class Consumer implements IConsumer {
    private _name: string;
    private _imageUrl: string;

    constructor(name: string = 'Consumer') {
        this._name = name;
        this._imageUrl = "/dog.png";
    }

    get name(): string {
        return this._name;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }
}

export default Consumer;
