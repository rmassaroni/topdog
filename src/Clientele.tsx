import { useState, useEffect, useRef } from 'react';

class Customer {
    static currentConsumers: Customer[] = [];
    // static storePopularity: number = 5;
    static getCurrentConsumers(): string[] {
        return Customer.currentConsumers.map((consumer) => consumer.name);
    }

    private name: string;
    private imageUrl: string;

    constructor(name: string = 'Customer') {
        this.name = name;
        this.imageUrl = "/dog.png";
    }

    public getName(): string {
        return this.name;
    }

    public getImageUrl(): string {
        return this.imageUrl;
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
            <div style={{ marginLeft: "10px" }}>
                <h2 style={{ marginBottom: "10px" }}>Clientele</h2>
                <p style={{ marginTop: "5px" }}>Customer Count: {customerCount}</p>
                <ul style={{ display: "flex", listStyleType: "none", paddingLeft: "0px" }}>
                    {currentCustomers.map((customer, index) => {
                        return <li style={{ display: "grid", textAlign: "center" }} key={index}>
                            <img style={{ width: "100px" }} src={customer.getImageUrl()} alt="customer" />
                            {customer.getName()}
                        </li>
                    })}
                </ul>
                
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
