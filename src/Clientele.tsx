import { useState, useEffect, useRef } from 'react';
import { Product } from './Product';
import { InventoryType } from './types';

class Customer {

    private name: string;
    private imageUrl: string;
    private spree: number;
    private attemptedProducts: { product: Product, bought: boolean }[];


    constructor(name: string = 'Customer') {
        this.name = name;
        this.imageUrl = "/dog.png";
        this.spree = this.generateSpree();
        this.attemptedProducts = [];
    }

    public getName(): string {
        return this.name;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

    private generateSpree(): number {
        const p = 0.75;
        let count = 1;
        while (Math.random() < p) {
            count++;
        }
        return count;
    }

    public getSpree(): number {
        return this.spree;
    }

    public tryBuy(product: Product): boolean {
        const randomValue = Math.random();
        const bought = randomValue <= product.getDemand();
        this.attemptedProducts.push({ product, bought });
        if (bought) {
            console.log(`${this.name} bought ${product.getName()} with demand ${product.getDemand()}.`);
            return true;
        } else {
            console.log(`${this.name} did not buy ${product.getName()} with demand ${product.getDemand()}.`);
            return false;
        }
    }

    public getAttemptedProducts(): { product: Product, bought: boolean }[] {
        return this.attemptedProducts;
    }
}


const Clientele = ( inv: InventoryType ) => {
    const [storePopularity, setStorePopularity] = useState<number>(1);
    const [currentCustomers, setCurrentCustomers] = useState<Customer[]>([]);
    const [customerCount, setCustomerCount] = useState<number>(0);
    const [intervalMillis, setIntervalMillis] = useState<number>(1000 / storePopularity);
    const [totalParkingSpaces, setTotalParkingSpaces] = useState<number>(10);
    const [customerServiceTime, setCustomerServiceTime] = useState<number>(1000);

    const customerCountRef = useRef(customerCount);
    const currentCustomersRef = useRef(currentCustomers);

    const parkingStatus = (): string => {
        if (isFull()) {
            return "Full";
        }
        return totalParkingSpaces - currentCustomersRef.current.length + " spaces available";
    }

    const isFull = (): boolean => {
        return currentCustomersRef.current.length === totalParkingSpaces;
    }

    useEffect(() => {
        customerCountRef.current = customerCount;
        currentCustomersRef.current = currentCustomers;
    }, [customerCount, currentCustomers]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentCustomersRef.current.length < totalParkingSpaces) {
                setCustomerCount((prevCount) => {
                    const newCount = prevCount + 1;
                    customerCountRef.current = newCount;
                    return newCount;
                });
                setCurrentCustomers((prevCustomers) => {
                    const newCustomers = [...prevCustomers, new Customer('Customer ' + (customerCountRef.current))];
                    currentCustomersRef.current = newCustomers;
                    return newCustomers;
                });

            } else {
            }
        }, intervalMillis);
    
        // const timeoutId = setTimeout(() => {
        //     clearInterval(intervalId);
        //     console.log("Simulation stopped.");
        // }, 10000);

        return () => {
            clearInterval(intervalId);
            // clearTimeout(timeoutId);
        }
    }, [intervalMillis, totalParkingSpaces]);

    useEffect(() => {
        const buyIntervalId = setInterval(() => {
            if (currentCustomersRef.current.length === 0) {
                console.log("No customers to serve.");
                return;
            } else if (currentCustomersRef.current[0].getSpree() === currentCustomersRef.current[0].getAttemptedProducts().length) {
                console.log("Customer spree over.");
                setCurrentCustomers((prevCustomers) => prevCustomers.slice(1));
                currentCustomersRef.current = currentCustomersRef.current.slice(1);
                setCustomerCount((prevCount) => prevCount - 1);
                customerCountRef.current = customerCountRef.current - 1;
            } else {
                // currentCustomersRef.current.forEach(customer => {
                // console.log(inv.products.length);
                const customer = currentCustomersRef.current[0];
                    if (inv.products.length === 0) {
                        // console.log("No products to buy.");
                        return;
                    } else {
                        const randomIndex = Math.floor(Math.random() * inv.products.length);
                        const randomProduct = inv.products[randomIndex];
                        if (customer.tryBuy(randomProduct)) {
                            inv.sell(randomIndex);
                    }
                    // setCurrentCustomers((prevCustomers) => prevCustomers.slice(1));
                    // setCurrentCustomers(currentCustomersRef);
                    }
                // });
            }
        }, customerServiceTime);

        return () => {
            clearInterval(buyIntervalId);
        };
    }, [customerServiceTime, inv.products]);

    const component = () => {
        return (
            <div style={{ marginLeft: "10px" }}>
                <h2 style={{ marginBottom: "10px" }}>Clientele</h2>
                <p style={{ marginTop: "5px", marginBottom: "5px" }}>Customer Count: {customerCount}</p>
                <p style={{ marginTop: "5px", marginBottom: "5px" }}>Parking Spaces: {totalParkingSpaces}</p>
                <p style={{ marginTop: "5px" }}>Parking Status: {parkingStatus()}</p>
                <ul style={{ display: "flex", listStyleType: "none", paddingLeft: "0px" }}>
                    {currentCustomers.map((customer, index) => {
                        return <li style={{ display: "grid", textAlign: "center" }} key={index}>
                            <img style={{ width: "100px" }} src={customer.getImageUrl()} alt="customer" />
                            <p style={{ marginTop: "0px", marginBottom: "0px" }}>{customer.getName()}</p>
                            <p style={{ marginTop: "0px", marginBottom: "0px" }}>Spree: {customer.getSpree()}</p>
                            <ul style={{ listStyleType: "none", padding: "0" }}>
                                {customer.getAttemptedProducts().map((attempt, index) => (
                                    <li key={index} style={{ color: attempt.bought ? "green" : "red" }}>
                                        {attempt.product.getName()}
                                    </li>
                                ))}
                            </ul>
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
