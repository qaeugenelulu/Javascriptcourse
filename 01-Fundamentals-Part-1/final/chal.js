let initialBill =100 ;
let bill =40
;
const smallBill = 0.15;
const otherBill = 0.2;
const sValue = 50;
const bValue = 300;

const tip = bill<=bValue && bill>=sValue ? bill*smallBill : bill*otherBill ;

console.log(`the bill is ${bill} and tip was ${tip} and total ${bill+tip}`);


//


