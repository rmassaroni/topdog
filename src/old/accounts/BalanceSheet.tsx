import React from 'react';
import { iTotal } from "./types";


const BalanceSheet = (assets: iTotal, liabilities: iTotal) => {
    const component = () => (
        <div>
            <h2 style={{ textAlign: "center", margin: "5px" }}>Balance Sheet as of July 2024</h2>
            <div style={{ display: "flex" }}>
                {assets.component()}
                {liabilities.component()}
            </div>
        </div>
    );

    return {
        component,
    }
}

export default BalanceSheet;
