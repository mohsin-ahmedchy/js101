//call method and apply method:

const rynair = {
    airline:'Rynair',
    code:'RY',
    booking:[],
    book(flightNumber,name){
        console.log(`${name} book a ticket on ${this.airline},where the fight name is ${this.code}${flightNumber}.`);
        this.booking.push({flight:`${this.code}${flightNumber}`,name});
    }
   
}


const novoAirline = {
    airline:'NovoAirline',
    code:'NA',
    booking:[]
}

const norwezian = {
    airline:'Norwezian',
    code:'NR',
    booking:[]
}
const bookIn = rynair.book;

//bookIn(234,'Mohsin');-It does not work


// using call() method to solve this problem.

bookIn.call(rynair,123,'Mohsin Ahmed')
bookIn.call(novoAirline,2389,'Mujakkir Ahmed')
bookIn.call(novoAirline,389,'Tasrik Ahmed')
bookIn.call(norwezian,945,'Xaber')
//rynair.book(123,'Mohsin Ahmed');-normal solution only for one object
console.log(rynair);
console.log(novoAirline);
console.log(norwezian);

//apply() use when we work with array

const details = [678,'Ovi'];
//bookIn.apply(norwezian,details);//we can solve it another way

bookIn.call(norwezian,...details);

//Best solution is: call();
