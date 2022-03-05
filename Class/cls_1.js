//class:
class PersonCL{
    constructor(firstName,year){
        this.firstName = firstName;
        this.year = year;
    }
    checkAge(){
        console.log(2037-this.year);
    }
    checkName(){
        console.log(`Hey ${this.firstName}`);
    }
}

let mohsin = new PersonCL('Mohsin',1993);
mohsin.checkAge();
mohsin.checkName();

console.log(mohsin.__proto__ === PersonCL.prototype);