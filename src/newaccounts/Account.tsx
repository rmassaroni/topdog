import React from 'react';
import { USD } from '../utils';
import { AccountType, DueType, iAccount } from './types';

export default class Account implements iAccount {
    public readonly accountType?: AccountType;
    public readonly dueType?: DueType;
    private _name: string;
    private _value: number;

    public constructor(initialValue: number = 0, initialName: string = 'Account') {
        this._name = initialName;
        this._value = initialValue;
    }

    public usd = (val: number = this._value): string => USD(val);
    public exists = (): boolean => this._value > 0;
    public fullName = (): string => `${this._name}: ${this.usd()}`;

    public get name(): string { return this._name; }
    public set name(newName: string) { this._name = newName; }

    public get value(): number { return this._value; }
    public set value(newValue: number) { this._value = newValue; }

    public component = (): JSX.Element => (
        <div className="asset-square">
            <div>{this._name}</div>
            <div>{this.usd()}</div>
        </div>
    );
}
