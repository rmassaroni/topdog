import { LiabilityType } from '../../types';
import Account from '../Account';

const Liability = (initialValue: number = 0, initialName: string = 'Liability'): LiabilityType => {
    return {
        ...Account(initialValue, initialName),
        type: 'Liability'
    };
};

export const AccountsPayable = (initialValue: number = 0): LiabilityType => {
    return {
        ...Liability(initialValue, 'Accounts Payable'),
    }
}

export default Liability;
