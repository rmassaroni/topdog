import React, { useState } from 'react';
import { IChunk } from './types';
import Chunk from './Chunk';
import './Store.css';

const Store = (plotLength: number = 1, plotWidth: number = 1) => {
    const generateChunks = (rows: number, cols: number): IChunk[][] => {
        const chunks: IChunk[][] = [];
        for (let i = 0; i < rows; i++) {
            const row: IChunk[] = [];
            for (let j = 0; j < cols; j++) {
                const walls = {
                    top: i === 0,
                    right: j === cols - 1,
                    bottom: i === rows - 1,
                    left: j === 0
                };
                row.push(Chunk('empty', walls));
            }
            chunks.push(row);
        }
        return chunks;
    };

    const [length, setLength] = useState<number>(plotLength);
    const [width, setWidth] = useState<number>(plotWidth);

    const [chunks] = useState<IChunk[][]>(generateChunks(plotLength, plotWidth));

    // return (
    //     <div className="store-container" style={{ gridTemplateRows: `repeat(${length}, 1fr)`, gridTemplateColumns: `repeat(${width}, 1fr)` }}>
    //         <div className="store-item door">Door</div>
    //         <div className="store-item cash-register">Cash Register</div>
    //         <div className="store-item shelf">Shelf</div>
    //         <div className="store-item shelf">Shelf</div>
    //         <div className="store-item shelf">Shelf</div>
    //         <div className="store-item shelf">Shelf</div>
    //         <div className="store-item shelf">Shelf</div>
    //     </div>
    // );

    return (
        <div className="store-container" style={{ gridTemplateRows: `repeat(${plotLength}, 1fr)`, gridTemplateColumns: `repeat(${plotWidth}, 1fr)` }}>
            {chunks.map((row, rowIndex) => (
                row.map((chunk, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`} className={`store-item-container ${chunk.walls.top ? 'wall-top' : 'no-wall-top'} ${chunk.walls.right ? 'wall-right' : 'no-wall-right'} ${chunk.walls.bottom ? 'wall-bottom' : 'no-wall-bottom'} ${chunk.walls.left ? 'wall-left' : 'no-wall-left'}`}>
                        {chunk.component()}
                    </div>
                ))
            ))}
        </div>
    );
};

export default Store;
