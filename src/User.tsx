import { useState } from 'react';
import { Cash } from './newaccounts/assets/Asset';
import { useClassState } from './newaccounts/useClassState';


const User = () => {

    // const handleLoan = (loanAmount: number = 100) => {
    //     cash.value += loanAmount;
    //     console.log(cash.value);
    // }
    // const [cash] = useState(new Cash(1000));
    

    const [cash, setCash] = useClassState(new Cash(1000));
    const handleLoan = (loanAmount: number = 100) => {
        // setCash({ ...cash, value: cash.value + loanAmount });
        const updatedCash = new Cash(cash.value + loanAmount);
        setCash(updatedCash);
        console.log(cash.value);
    };
    return (
        <div>
            <p>{cash.fullName()}</p>
            <button onClick={() => handleLoan(100)}>Loan
            </button>
        </div>
    )
}

export default User;
