import { BankAccount } from './services/classes/Bankaccount';
import { Database } from './services/classes/Database';
import { Key } from './services/classes/Key';

export let db = new Database();

let firstKey = new Key(12345);
let firstAccount = new BankAccount(5000, firstKey);
let firstResult = db.insert(firstAccount);

let secondKey = new Key(5678);
let secondAccount = new BankAccount(10000, secondKey);
let secondResult = db.insert(secondAccount);

let thirdKey = new Key(5678);
let thirdAccount = new BankAccount(10000, thirdKey);
let thirdResult = db.insert(thirdAccount);

let lookupAccount = db.find(secondKey);

console.log(db.bankAccounts);

console.log(lookupAccount.getBalance());
console.log(db.bankAccounts);
console.log(firstAccount.getBalance());
console.log(secondAccount.getKey());

db.delete(firstKey);
console.log(db.bankAccounts);