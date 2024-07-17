import Asset from '../../../accounts/assets/Assets';
import { IFFE } from './types';

const FFE = (initialValue: number = 0, initialName: string = 'FFE'): IFFE => {
    return {
        ...Asset(initialValue, initialName),
        ppeType: 'FFE', //will find a way to assign initialName and ffe at same time
    }
}

export default FFE;
