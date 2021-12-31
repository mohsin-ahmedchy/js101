//map():

const loan = [45,54,67,87,9,34,6,7,8,12];
const interest = 1.4;

const loan_s = loan.map(a=>Math.ceil(a*interest));//Math.floor()
console.log(loan_s);

console.log('----------');

//other solution:
const newLoan = [];
for(const val of loan){
    let value = Math.floor(val*interest);//Math.ceil()
    newLoan.push(value);
}
console.log(newLoan);
