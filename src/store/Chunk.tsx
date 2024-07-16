import React from 'react';
import { IChunk, WallType } from './types';

const Chunk = (
    type: 'shelf' | 'cash register' | 'door' | 'empty' = 'empty',
    // walls: { top: boolean; right: boolean; bottom: boolean; left: boolean } = { top: false, right: false, bottom: false, left: false }
    walls: WallType[] = ['empty', 'empty', 'empty', 'empty']
): IChunk => {
    const sqft = 10;
    const length = 10;
    const width = 10;
    const empty = true;



  const wallSides = ['top', 'right', 'bottom', 'left'];
  const wallClasses = wallSides.map((side, index) => {
    const wallType = walls[index];
    if (wallType === 'empty') return `wall-${side}`;
    if (wallType === 'wall') return `no-wall-${side}`;
    if (wallType === 'door') return `door-${side}`;
  }).join(' ');





    // const component = (): JSX.Element => (
    //                 <div className={`store-item-container ${walls[0] === 'wall' ? 'wall-top' : 'no-wall-top'} ${walls[1] === 'wall' ? 'wall-right' : 'no-wall-right'} ${walls[2] === 'wall' ? 'wall-bottom' : 'no-wall-bottom'} ${walls[3] === 'wall' ? 'wall-left' : 'no-wall-left'}`}>
    //         <div className={`store-item ${type}`}>
    //             {type !== 'empty' && type}
    //         </div>
    //     </div>
    // );
    const component = (): JSX.Element => (
    <div className={`store-item-container ${wallClasses}`}>
      <div className={`store-item ${type}`}>
        {type !== 'empty' && type}
      </div>
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
