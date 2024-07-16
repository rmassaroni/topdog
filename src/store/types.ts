import { Comp } from '../types';

export type ChunkType = 'shelf' | 'cash register' | 'door' | 'empty';
export type WallType = 'empty' | 'wall' | 'door';

export interface IChunk extends Comp {
    length: number;
    width: number;
    empty: boolean;
    type?: ChunkType;
    // walls: {
    //     top: boolean;
    //     right: boolean;
    //     bottom: boolean;
    //     left: boolean;
    // };
    walls: WallType[];
}
