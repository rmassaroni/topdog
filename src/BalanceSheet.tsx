import { CashType, CompType } from "./types";
import { Assets } from "./Assets";
import React from 'react';
import { Liabilities } from "./Liabilities";


const BalanceSheet = (cash: CashType, assets: CompType, liabilities: CompType) => {


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
