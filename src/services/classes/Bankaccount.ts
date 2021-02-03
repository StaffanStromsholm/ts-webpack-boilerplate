import { BankAccountSpecs } from './../../interfaces/bankaccount.interfaces';
import { Key } from './Key';

export class BankAccount implements BankAccountSpecs {
    key: Key;
    balance: number;

    constructor(balance: number, key: Key){
        this.balance = balance;
        this.key = key;
    }

    deposit(amount: number): void{
        this.balance = this.balance + amount;
        console.log(this.balance);
    }

    getBalance():number{
        return this.balance;
    }

    getKey():Key{
        return this.key;
    }
}