//págame tía
const persons = 9;
const bill = 128;
const sake = 2;

const billWithoutSake = bill - sake;
const payEveryOne = billWithoutSake / persons;
const payAna = payEveryOne + sake;

console.log("Everyone has to pay " + payEveryOne + "€");
console.log("Ana has to pay " + payAna + "€");
