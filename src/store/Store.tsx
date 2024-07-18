import React, { useState } from 'react';
import { iFloorSpace, IStore } from './types';
import FloorSpace from './FloorSpace';
import './Store.css';

const Store = (plotLength: number = 1, plotWidth: number = 1): IStore => {
    const generateChunks = (rows: number, cols: number): iFloorSpace[][] => {
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

                row.push(FloorSpace(type, walls, position));
            }
            chunks.push(row);
        }
        return chunks;
    };

    const [length, setLength] = useState<number>(plotLength);
    const [width, setWidth] = useState<number>(plotWidth);

    const [chunks] = useState<iFloorSpace[][]>(generateChunks(plotLength, plotWidth));

    const component = () => (
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

    return {
        component,
        chunks,
        length,
        width,
    };
};

export default Store;
