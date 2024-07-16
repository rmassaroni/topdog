import { Comp } from '../types';

export interface IChunk extends Comp {
    length: number;
    width: number;
    empty: boolean;
    type: 'shelf' | 'cash register' | 'door' | 'empty';
    walls: {
        top: boolean;
        right: boolean;
        bottom: boolean;
        left: boolean;
    };
}
