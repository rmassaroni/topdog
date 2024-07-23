import React from 'react';
import { iFloorSpace, WallType, ShelfLocation } from './types';
import './Store.css';

const Chunk = (
    type: 'shelf' | 'cash register' | 'door' | 'empty' = 'empty',
    walls: WallType[] = ['empty', 'empty', 'empty', 'empty'],
    shelfLocation: ShelfLocation = 'none'
): iFloorSpace => {
    const sqft = 10;
    const length = 10;
    const width = 10;
    const empty = true;

    const wallSides = ['top', 'right', 'bottom', 'left'];
    const wallClasses = wallSides.map((side, index) => {
        const wallType = walls[index];
        if (wallType === 'empty') return `no-wall-${side}`;
        if (wallType === 'wall') return `wall-${side}`;
        if (wallType === 'door') return `door-${side}`;
    }).join(' ');

    const component = (): JSX.Element => (
        <div className={`store-item-container ${wallClasses}`}>
            <div className={`store-item`}>
                {type !== 'empty' && shelfLocation !== 'none' && <div className={`shelf shelf-${shelfLocation}`}></div>}
            </div>
        </div>
    );

    return {
        component,
        length,
        width,
        empty,
        type,
        walls,
        shelfLocation
    }
};

export default Chunk;

export const generateChunks = (rows: number, cols: number): iFloorSpace[][] => {
    const chunks: iFloorSpace[][] = [];
    for (let i = 0; i < rows; i++) {
        const row: iFloorSpace[] = [];
        for (let j = 0; j < cols; j++) {
            let walls: 'empty' | 'wall' | ('door' | 'empty' | 'wall')[] = ['empty', 'empty', 'empty', 'empty'];

            if (i === 0) walls[0] = 'wall';
            if (j === cols - 1) walls[1] = 'wall';
            if (i === rows - 1) walls[2] = 'wall';
            if (j === 0) walls[3] = 'wall';

            if (i === rows - 1 && j === 2) walls[2] = 'door';

            let type: 'shelf' | 'cash register' | 'door' | 'empty' = 'empty';
            let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
            if (i === 0 && j === 4) type = 'cash register';
            else if (i === 2 || i === 3) type = 'shelf';
            else if (i === 1 && j === 0) type = 'shelf';
            else if (i === 0 && j === 0) type = 'shelf';
            if (i === 4 && (j === 4 || j === 0)) type = 'shelf';
            if (i === 4 && j === 3) type = 'shelf';
            if (i === 2) position = 'bottom';
            if (i === 4) position = 'bottom';
            if (j === 0) position = 'left';

            row.push(Chunk(type, walls, position));
        }
        chunks.push(row);
    }
    return chunks;
};
