const person = function(firstName,year){
    this.name = firstName;
    this.year = year;
}

const mohsin = new person('Mohsin',1993);
const abir = new person('Abir',1992);
const shumon = new person('Shumon',1991);

//prototype:

person.prototype.calAge = function(){
    console.log(2037-this.year);
}

mohsin.calAge();
abir.calAge();
shumon.calAge();
//
console.log(abir.__proto__===person.prototype);

//isPrototypeOf:

console.log(person.prototype.isPrototypeOf(abir))

console.log(person.prototype.isPrototypeOf(mohsin));

//

person.prototype.place = 'Armegatan 32A';

console.log(mohsin,abir);
console.log(mohsin.place,abir.place);


console.log(mohsin.hasOwnProperty('year'));
console.log(abir.hasOwnProperty('name'));
console.log(mohsin.hasOwnProperty('place'));

//Example:

let arr = [2,2,3,4,6,5,5,5];

Array.prototype.unique = function(){
    return [...new Set(this)];
}
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__)//(object.prototype top of the prototype chain).
console.log(arr.__proto__.__proto__.__proto__);//null
console.log(arr.unique());