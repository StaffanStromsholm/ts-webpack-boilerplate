import { ComputerOne } from './services/classes/ComputerOne';
import { ComputerTwo } from './services/classes/ComputerTwo';

let computer1: ComputerOne = new ComputerOne(1);
let computer2 = new ComputerTwo(computer1);
computer2.printConversion(3);