// Function with constructor:

const person = function(firstName,year){
    this.name = firstName;
    this.year = year;
}

const mohsin = new person('Mohsin',1993);
const abir = new person('Abir',1992);
const shumon = new person('Shumon',1991);

console.log(mohsin,abir,shumon);