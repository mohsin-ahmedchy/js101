// closures:


const secureBooking = function(){
    let countPassenger=0;
    return function(){
        countPassenger++;
        console.log(`${countPassenger} passengers.`)
    }
}

const book = secureBooking();//countPassenger = 0

book();
book();
book();

console.dir(book);// what type of function(check) and also see the closures

//example-1:

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a*3);
    }
}

const h = function(){
    const b = 83;
    f = function(){
        console.log(b*3);
    }
}

g()
f()

h()
f()

//example-2:

const passengerCheck = function(n,wait){
    const perGroup = n/3;
    
    setTimeout(function(){
    console.log(`Total ${n} passengers in the plane`);
    console.log(`There are three catagorius.Where each group has ${perGroup} passengers.`)

    },wait*1000);


    console.log(`All passengers need to wait ${wait} seconds for boarding pass!`);
}

passengerCheck(180,3)
