import { useState } from 'react';

class Customer {
    static currentConsumers: Customer[] = [];
    // static storePopularity: number = 5;
    static getCurrentConsumers(): string[] {
        return Customer.currentConsumers.map((consumer) => consumer.name);
    }

    private name: string;

    constructor(name: string = 'Consumer') {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}


const Clientele = () => {
    const [storePopularity, setStorePopularity] = useState<number>(1);
    const [currentCustomers, setCurrentCustomers] = useState<Customer[]>([]);

    function simulateNewCustomer() {
        // setCurrentCustomers([...currentCustomers, new Customer()]);
        console.log("New customer entered the store.");
        // console.log(currentCustomers.length + " customers in the store.");
    }

    const getCurrentCustomers = () => {
        return currentCustomers.map((customer) => customer.getName());
    }

    const intervalMillis = 1000 / storePopularity;

    const intervalId = setInterval(simulateNewCustomer, intervalMillis);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Simulation stopped.");
    }, 10000);

    const component = () => {

        return (
            <div>
                <p>Current Customers:</p>
                <ul>
                    {currentCustomers.map((customer, index) => {
                        return <li key={index}>{customer.getName()}</li>
                    })}
                </ul>
            </div>
        );
    }


    return {
        storePopularity,
        setStorePopularity,
        currentCustomers,
        simulateNewCustomer,
        getCurrentCustomers,
        component
    };
}

export { Customer, Clientele };
