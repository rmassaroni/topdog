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
                // const walls = {
                //     top: i === 0,
                //     right: j === cols - 1,
                //     bottom: i === rows - 1,
                //     left: j === 0
                // };
            let walls: 'empty' | 'wall' | ('door' | 'empty')[] = ['empty', 'empty', 'empty', 'empty'];

            //  if (i === 0 && j === 0) walls = ['door', 'empty', 'empty', 'empty'];
            // else if (i === rows - 1 && j === cols - 1) walls = ['empty', 'empty', 'door', 'empty'];
            // else if (i === 0) walls = ['door', 'wall', 'door', 'wall'];
            // else if (j === 0) walls = ['wall', 'empty', 'wall', 'empty'];
                let type: 'shelf' | 'cash register' | 'door' | 'empty' = 'empty';
                if (i === 0 && j === 0) type = 'door';
                else if (i === 1 && j === 1) type = 'cash register';
                else if (i === 2) type = 'shelf';
                row.push(Chunk(type, walls));
            }
            chunks.push(row);
        }
        return chunks;
    };

    const [length, setLength] = useState<number>(plotLength);
    const [width, setWidth] = useState<number>(plotWidth);

    const [chunks] = useState<IChunk[][]>(generateChunks(plotLength, plotWidth));

    return (
        <div className="store-container" style={{ gridTemplateRows: `repeat(${plotLength}, 1fr)`, gridTemplateColumns: `repeat(${plotWidth}, 1fr)` }}>
            {chunks.map((row, rowIndex) => (
                row.map((chunk, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`}>
                        {chunk.component()}
                    </div>
                ))
            ))}
        </div>
    );
};

export default Store;
