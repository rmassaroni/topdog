import React, { useState } from 'react';
import { iFloorSpace, iStore } from './types';
import { generateChunks } from './FloorSpace';
import './Store.css';
import Customer from '../clientele/Customer';

const Store = (plotLength: number = 1, plotWidth: number = 1): iStore => {
    const [length, setLength] = useState<number>(plotLength);
    const [width, setWidth] = useState<number>(plotWidth);
    const [customerPosition, setCustomerPosition] = useState<{ row: number; col: number }>({ row: 4, col: 2 });
    const [chunks] = useState<iFloorSpace[][]>(generateChunks(plotLength, plotWidth));

    const isBlocked = (row: number, col: number, direction: 'up' | 'down' | 'left' | 'right'): boolean => {
        const chunk = chunks[row][col];
        if (direction === 'up') return row > 0 && chunks[row - 1][col].shelfLocation === 'bottom' && chunk.shelfLocation === 'top';
        if (direction === 'down') return row < length - 1 && chunks[row + 1][col].shelfLocation === 'top' && chunk.shelfLocation === 'bottom';
        if (direction === 'left') return col > 0 && chunks[row][col - 1].shelfLocation === 'right' && chunk.shelfLocation === 'left';
        if (direction === 'right') return col < width - 1 && chunks[row][col + 1].shelfLocation === 'left' && chunk.shelfLocation === 'right';
        return false;
    };

    const moveCustomer = (direction: 'up' | 'down' | 'left' | 'right') => {
        if (isBlocked(customerPosition.row, customerPosition.col, direction)) return;
        setCustomerPosition((prevPosition) => {
            const newPosition = { ...prevPosition };
            if (direction === 'up' && newPosition.row > 0) newPosition.row--;
            if (direction === 'down' && newPosition.row < length - 1) newPosition.row++;
            if (direction === 'left' && newPosition.col > 0) newPosition.col--;
            if (direction === 'right' && newPosition.col < width - 1) newPosition.col++;
            return newPosition;
        });
    };

    const component = () => (
        <div className="store-container" style={{ gridTemplateRows: `repeat(${plotLength}, 1fr)`, gridTemplateColumns: `repeat(${plotWidth}, 1fr)` }}>
            {chunks.map((row, rowIndex) => (
                row.map((chunk, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`}>
                        {chunk.component()}
                    </div>
                ))
            ))}
            <Customer 
                position={customerPosition}
                style={{
                    marginLeft: "50px",
                    marginTop: "50px",
                }}
            />
            <div className="controls">
                <button onClick={() => moveCustomer('up')}>Up</button>
                <button onClick={() => moveCustomer('down')}>Down</button>
                <button onClick={() => moveCustomer('left')}>Left</button>
                <button onClick={() => moveCustomer('right')}>Right</button>
            </div>
        </div>
    );

    return {
        component,
        chunks,
        length, setLength,
        width, setWidth,
    };
};

export default Store;
