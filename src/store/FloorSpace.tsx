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
