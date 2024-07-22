import { useState } from 'react';
import Cash from './accounts/assets/Assets';
import { InventoryType } from './types';
import { IStore } from './store/types';

interface iUser {
    username: string;
    inv: InventoryType;
    store: IStore;
}


const User = () => {

    const [cash, setCash] = useState(Cash(1000));

    return (
        <div>
            <p>{cash.fullName()}</p>
        </div>
    )
}

export default User;
