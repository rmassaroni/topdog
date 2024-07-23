import { useState } from 'react';
import { Cash } from './accounts/assets/Assets';
import { IStore } from './store/types';
import { iCash } from './accounts/assets/types';
import Inventory from './inventory/Inventory';
import { Product } from './inventory/Product';
import { iInventory } from './inventory/types';
import { AccountsPayable } from './accounts/liabilities/Liabilities';
import TotalAssets from './accounts/assets/TotalAssets';
import { AccountsReceivable } from './accounts/assets/Assets';
import TotalLiabilities from './accounts/liabilities/TotalLiabilities';
import BalanceSheet from './accounts/BalanceSheet';

interface iUser {
    username: string;
}

interface UserProps {
    username?: string;
}


const User = ({ username = "username" }: UserProps) => {
    const cash: iCash = Cash(1000);
    const inv: iInventory = Inventory(0, [], cash);
    const ap = AccountsPayable(0);
    const assets = TotalAssets(cash, AccountsReceivable(), inv);
    // const clientele = Clientele(inv);
    const liabilities = TotalLiabilities(ap);
    const bs = BalanceSheet(assets, liabilities);

    const products: Product[] = [
        new Product('Product A', 50),
        new Product('Product B', 75),
        new Product('Product C', 100),
    ];

    return {
        username,
        cash,
        inv,
    }
}

export default User;
