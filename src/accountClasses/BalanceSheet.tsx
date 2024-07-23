import { TotalType } from "../types";
import React from 'react';


const BalanceSheet = (assets: TotalType, liabilities: TotalType) => {
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
