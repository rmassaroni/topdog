import { CashType, Comp } from "../types";
import { TotalAssets } from "./Assets";
import React from 'react';
import { TotalLiabilities } from "./Liabilities";


const BalanceSheet = (cash: CashType, assets: Comp, liabilities: Comp) => {


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
