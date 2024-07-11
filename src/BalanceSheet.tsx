import { CashType } from "./types";

const BalanceSheet = (cash: CashType) => {


    const component = () => (
        <div>
            <h1>{cash.usd()}</h1>
        </div>
    );

    return {
        component,
    }
}

export default BalanceSheet;
