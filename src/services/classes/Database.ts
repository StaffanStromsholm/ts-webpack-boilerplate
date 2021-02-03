import { DataBaseSpecs, BankAccountSpecs } from './../../interfaces/bankaccount.interfaces';
import { Key } from './Key';

export class Database implements DataBaseSpecs {
    bankAccounts: BankAccountSpecs[] = [];

    insert(BankAccount: BankAccountSpecs) {
        //if equals method returns true => return false
        if (BankAccount.key.equals(BankAccount.key)) {
            console.log('key already exists');
            return false;
        } else {
            //else push the new BankAccount and return true
            this.bankAccounts.push(BankAccount);
            return true;
        }

    }
    // If the find method returns undefined, the first item from the array is returned...
    // not a nice solution
    find(key: Key): BankAccountSpecs {
        return (this.bankAccounts.find(account => account.key === key)) || this.bankAccounts[0];
    }

    delete(key: Key): boolean {
        this.bankAccounts = this.bankAccounts.filter(account => account.key === key)
        return true;
    }
}