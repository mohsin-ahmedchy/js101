//Inheritance Between "Classes": Constructor Functions:

const Person = function(firstName,birthDay){
    this.firstName = firstName;
    this.birthDay = birthDay;
};

Person.prototype.callAge = function(){
    console.log(2037-this.birthDay);
}

const mohsin = new Person('Mohsin',1993);
mohsin.callAge();

const Student = function(firstName,birthDay,place){
    this.place = place;
    Person.call(this,firstName,birthDay);
}

Student.prototype=Object.create(Person.prototype);

Student.prototype.details = function(){
    console.log(`My name is ${this.firstName} and I live in ${this.place}`);
}

const abir = new Student('Abir',1992,'Sylhet');
abir.details();
abir.callAge();