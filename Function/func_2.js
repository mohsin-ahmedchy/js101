// arguments pass by value Vs reference:

const flight = 'LK101';
const person = {
    nam:'Mohsin',
    passport:1010123
}

const check = function(flight,person){//[person]-reference
    flight = 'KM202';
    person.nam = 'Mr.'+' '+person.nam;
    if(person.passport===1010123){
        console.log('Right Information');
    }
    else{
        console.log('Wrong Information');
    }
}

const pass = function(person){
    person.passport =300032;
}

pass(person);
check(flight,person);
console.log(person);
console.log(flight);