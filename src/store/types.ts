import { Comp } from '../types';

export type ChunkType = 'shelf' | 'cash register' | 'door' | 'empty';
export type WallType = 'empty' | 'wall' | 'door';
export type ShelfLocation = 'none' | 'top' | 'bottom' | 'left' | 'right';
export type ItemType = 'shelf' | 'cash register' | 'door' | 'empty';

export interface iChunk extends Comp {
    length: number;
    width: number;
    empty: boolean;
}

export interface iStore extends Comp {
    chunks: iChunk[][];
    width: number;
    length: number;
    setWidth: (width: number) => void;
    setLength: (length: number) => void;
}

export interface iFloorSpace extends iChunk {
    // type: 'empty';
    type?: ChunkType;
    walls: WallType[];
    shelfLocation: ShelfLocation;
}
