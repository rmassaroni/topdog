import React from 'react';
import './Store.css';

interface CustomerProps {
  position: { row: number; col: number };
    style?: React.CSSProperties;
}

const Customer: React.FC<CustomerProps> = ({ position, style }) => {
  return (
    <div
      className="customer"
      style={{
                ...style,
                // position: 'absolute',
                // transform: 'translate(-50%, -50%)',
                gridRow: position.row + 1,
                gridColumn: position.col + 1,
        
      }}
    />
  );
};
//gridRow: position.row + 1,
  //      gridColumn: position.col + 1,
export default Customer;

