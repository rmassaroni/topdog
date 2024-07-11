import { CashType, AssetsType } from "./types";
import { Assets } from "./Assets";
import React from 'react';


const BalanceSheet = (cash: CashType, assets: AssetsType) => {


    const component = () => (
        <div>
            <h2>Balance Sheet</h2>
            {assets.component()}
        </div>
    );

    return {
        component,
    }
}

export default BalanceSheet;
