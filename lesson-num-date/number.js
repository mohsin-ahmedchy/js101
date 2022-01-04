
//convert string to number:

console.log(Number('23'));
console.log(+('23'));

//number check:
//1.isFinite():
console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(+'23'));//We can use '+' instead of 'Number'
console.log(Number.isFinite(+'23.6'));

//2.isInteger
console.log(Number.isInteger(23.5));
console.log(Number.isInteger(+'23'));

//parseInt():
console.log(Number.parseInt(23.56));

//parseFloat():
console.log(Number.parseFloat(23.56));