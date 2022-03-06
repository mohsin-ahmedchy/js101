//Inheritance Between "Classes":

class PersonCl{
    constructor(fullName,year){
        this.fullName = fullName;
        this.year = year;
    }
    checkAge(){//over write in next class
        console.log(2037-this.year);
    }
    checkName(){
        console.log(`Hey ${this.fullName}`);
    }
}
class StudentCl extends PersonCl{
    constructor(fullName,year,course){
        super(fullName,year);
        this.course = course;
    }
    init(){
        console.log(`My name is ${this.fullName} and I am a student of ${this.course}.`)
    }
    checkAge(){//over write same function
        console.log(`I am ${2037-this.year} years old.`);
    }
}

const mohsin = new StudentCl('Mohsin Ahmed',2020,'CSE');
mohsin.init();
mohsin.checkAge();

