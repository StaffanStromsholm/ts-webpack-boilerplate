import { Key } from '../services/classes/Key';

export interface KeySpecs {
    equals: (key: Key) => boolean;
}

export interface BankAccountSpecs {
    key: Key;
    balance: number;
    deposit: (amount: number) => void;
    getBalance: () => number;
    getKey: () => Key;
}

export interface DataBaseSpecs {
    bankAccounts: BankAccountSpecs[];
    insert: (bankAccount: BankAccountSpecs) => boolean;
    find: (key: Key) => BankAccountSpecs;
    delete: (key: Key) => boolean;
}