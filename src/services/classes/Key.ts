import { KeySpecs } from "../../interfaces/bankaccount.interfaces";
import { db } from '../../index';

export class Key implements KeySpecs {

    keyNumber: number;

    constructor(number: number) {
        this.keyNumber = number;
    }

    // I was not able to make the equals method work, the for loop never returns true...
    equals(key: Key): boolean {
        //iterate over BankAccounts and return true if key already exists
        for(let account of db.bankAccounts){
            if(key === account.key){
                return true;
            }
        }
        return false;
    };
}