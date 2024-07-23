import { Cash } from './accounts/assets/Assets';
import Inventory from './inventory/Inventory';
import { AccountsPayable } from './accounts/liabilities/Liabilities';
import TotalAssets from './accounts/assets/TotalAssets';
import { AccountsReceivable } from './accounts/assets/Assets';
import TotalLiabilities from './accounts/liabilities/TotalLiabilities';
import BalanceSheet from './accounts/BalanceSheet';
import { Clientele } from './clientele/Clientele';
import Store from './store/Store';
import { iCash, iInventory, iAccountsPayable, iTotal, iClientele, iStore, Comp } from './types';

interface iUser {
    username: string;
    cash: iCash;
    inv: iInventory;
    ap: iAccountsPayable;
    assets: iTotal;
    clientele: iClientele;
    liabilities: iTotal;
    bs: Comp;
    store: iStore;
}

interface UserProps {
    username?: string;
}

const User = ({ username = "username" }: UserProps): iUser => {
    const cash: iCash = Cash(1000);
    const inv: iInventory = Inventory(0, [], cash);
    const ap: iAccountsPayable = AccountsPayable(0);
    const assets: iTotal = TotalAssets(cash, AccountsReceivable(), inv);
    const clientele: iClientele = Clientele(inv);
    const liabilities: iTotal = TotalLiabilities(ap);
    const bs: Comp = BalanceSheet(assets, liabilities);
    const store: iStore = Store(5, 5);

    return {
        username,
        cash,
        inv,
        ap,
        assets,
        clientele,
        liabilities,
        bs,
        store
    }
}

export default User;
