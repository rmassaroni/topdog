import { useState } from 'react';
import Cash from './accounts/assets/AssetClass';

const User = () => {
    const [cash, setCash] = useState<Cash>(new Cash(0));

    return {
        cash,
        setCash
    }
}

export default User;
