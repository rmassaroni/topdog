import Asset from "./Asset";
import { iAccount, iTotal } from "../types";
import { iAccountsReceivable, iAsset, iCash } from "./types";
import React from 'react';
import { USD } from '../../utils'

export default class TotalAssets extends Asset implements iTotal, iAsset {
    public readonly accountType: 'Asset' = 'Asset'; // should be automatically set by extending Account
    public accounts: iAccount[];
    public cash: iCash;
    public ar: iAccountsReceivable;
    public inv: iAsset;

    public constructor(cash: iCash, ar: iAccountsReceivable, inv: iAsset) {
        super(0, 'Total Assets');
        this.accounts = [];
        this.cash = cash;
        this.ar = ar;
        this.inv = inv;
    }
    public updateAccounts = (newAccounts: iAccount[]): iAccount[] => this.accounts = newAccounts;
    public totalValue = (): number => this.accounts.reduce((total, account) => total + account.value, 0);
    public length = (): number => this.accounts.length;
    public usd = (val: number = this.totalValue()): string => USD(val); //will try to inherit from Asset/Account but with different param

    // public component = (): JSX.Element => (
    //     <div style={{ width: "50%" }}>
    //         <h3 style={{ margin: "5px" }}>Assets</h3>
    //         <div className="asset-list" style={{ marginLeft: "0px"}}>
    //             <h4 style={{ margin: "5px 5px 5px 5px" }}>Current Assets</h4>
    //             {this.cash.component()}
    //             {this.ar.component()}
    //             {this.inv.component()}
    //             <div className="asset-square" style={{ fontWeight: "bold" }}>
    //                 <div>Total Current Assets</div>
    //                 <div>{this.usd()}</div>
    //             </div>
    //         </div>
    //     </div>
    // )
}
