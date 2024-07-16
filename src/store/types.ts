import { Comp } from '../types';

export type ChunkType = 'shelf' | 'cash register' | 'door' | 'empty';
export type WallType = 'empty' | 'wall' | 'door';
export type ShelfLocation = 'none' | 'top' | 'bottom' | 'left' | 'right';

export interface IChunk extends Comp {
    length: number;
    width: number;
    empty: boolean;
    type?: ChunkType;
    walls: WallType[];
    shelfLocation: ShelfLocation;
}
