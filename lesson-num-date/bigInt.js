
//BigInt()/n:
console.log(123456789877655432234677887654);
console.log(123456789877655432234677887654n);// 'n' instead of BigInt();

console.log(BigInt(20)+20n);

const num = 123456789877655432234677887654n;
console.log(num +' '+'this is a large number.');// in this case n will remove.
