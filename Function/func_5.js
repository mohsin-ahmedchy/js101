
//use of bind() method:

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

const bookInRy = bookIn.bind(rynair,1985);
const bookInNa = bookIn.bind(novoAirline,690);
const bookInNw = bookIn.bind(norwezian,9734);

bookInRy('Willan');
bookInNa('Xaber');
bookInNw('Antony');

//other example 
/*
rynair.count = 300;
rynair.inCount = function(){
    this.count++;
    console.log(this.count);
}

document.querySelector('.body').addEventListener('click',rynair.count.bind(rynair));
*/
//other example:

const addTax = (rate,value)=>console.log(value+value*rate);

const fixedRate = addTax.bind(null,0.23);
fixedRate(100);
fixedRate(23);