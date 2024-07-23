import { useState, useEffect, useRef } from 'react';
import { iInventory } from '../inventory/types';
import { ClienteleType } from '../types';
import Customer from './Customer';

const Clientele = ( inv: iInventory ): ClienteleType => {
    const [storePopularity, setStorePopularity] = useState<number>(0.2);
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

        return () => {
            clearInterval(intervalId);
        }
    }, [intervalMillis, totalParkingSpaces]);

    useEffect(() => {
        const buyIntervalId = setInterval(() => {
            if (currentCustomersRef.current.length === 0) {
                console.log("No customers to serve.");
                return;
            } else if (currentCustomersRef.current[0].spree === currentCustomersRef.current[0].attemptedProducts.length) {
                console.log("Customer spree over.");
                setCurrentCustomers((prevCustomers) => prevCustomers.slice(1));
                currentCustomersRef.current = currentCustomersRef.current.slice(1);
                setCustomerCount((prevCount) => prevCount - 1);
                customerCountRef.current = customerCountRef.current - 1;
            } else {
                const customer = currentCustomersRef.current[0];
                if (inv.products.length === 0) {
                    return;
                } else {
                    const randomIndex = Math.floor(Math.random() * inv.products.length);
                    const randomProduct = inv.products[randomIndex];
                    if (customer.tryBuy(randomProduct)) {
                        inv.sell(randomIndex);
                    }
                }
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
                            <img style={{ width: "100px" }} src={customer.imageUrl} alt="customer" />
                            <p style={{ marginTop: "0px", marginBottom: "0px" }}>{customer.name}</p>
                            <p style={{ marginTop: "0px", marginBottom: "0px" }}>Spree: {customer.spree}</p>
                            <ul style={{ listStyleType: "none", padding: "0" }}>
                                {customer.attemptedProducts.map((attempt, index) => (
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
