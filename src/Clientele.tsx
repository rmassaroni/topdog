import { useState, useEffect, useRef } from 'react';

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
    const [customerCount, setCustomerCount] = useState<number>(0);
    const [intervalMillis, setIntervalMillis] = useState<number>(1000 / storePopularity);

    const customerCountRef = useRef(customerCount);
    const currentCustomersRef = useRef(currentCustomers);

    useEffect(() => {
        customerCountRef.current = customerCount;
        currentCustomersRef.current = currentCustomers;
    }, [customerCount, currentCustomers]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentCustomers((prevCustomers) => {
                const newCustomers = [...prevCustomers, new Customer()];
                currentCustomersRef.current = newCustomers;
                return newCustomers;
            });
            setCustomerCount((prevCount) => {
                const newCount = prevCount + 1;
                customerCountRef.current = newCount;
                return newCount;
            });
        }, intervalMillis);
    
        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            console.log("Simulation stopped.");
        }, 10000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }
    }, [intervalMillis]);

    const component = () => {
        return (
            <div>
                <p>Current Customers:</p>
                <ul>
                    {currentCustomers.map((customer, index) => {
                        return <li key={index}>{customer.getName()}</li>
                    })}
                </ul>
                <p>Customer Count: {customerCount}</p>
            </div>
        );
    }


    return {
        storePopularity,
        setStorePopularity,
        currentCustomers,
        component
    };
}

export { Customer, Clientele };
