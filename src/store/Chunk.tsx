import React from 'react';
import { IChunk } from './types';

const Chunk = (type: 'shelf' | 'cash register' | 'door' | 'empty' = 'empty', walls: { top: boolean; right: boolean; bottom: boolean; left: boolean }): IChunk => {
    const sqft = 10;
    const length = 10;
    const width = 10;
    const empty = true;
    const component = (): JSX.Element => (
        <div className={`store-item ${type}`}>
            {type !== 'empty' && type}
        </div>
    );

    return {
        component,
        length,
        width,
        empty,
        type,
        walls
    }
};

export default Chunk;
