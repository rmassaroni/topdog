import React from 'react';
import { iChunk } from './types';
import './Store.css';

const Chunk = (): iChunk => {
    const sqft = 10;
    const length = 10;
    const width = 10;
    const empty = true;

    const component = (): JSX.Element => (
        <div></div>
    );

    return {
        component,
        length,
        width,
        empty,
    }
};

export default Chunk;
