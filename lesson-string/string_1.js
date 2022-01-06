//String Method:
const flight = 'Your Airline will arrive at 6 p.m.';

//indexOf():
console.log(flight.indexOf('Airline'));

//lastIndexOf():

console.log(flight.lastIndexOf(' '));// index of 'space'

//length:
console.log(flight.length);

//slice():

console.log(flight.slice(0,12));//[startIndex,EndIndex]
console.log(flight.slice(13));//startIndex;
console.log(flight.slice(-4));//startIndex;(count from opposite site)

//Example:

const seat = (position)=>{
    const side = position.slice(-1);
    if(side==='C'|| side==='D'){
        console.log('Your seat position is in middle.')
    }
    else{
        console.log('You need to check your seat position either left or right.');
    }
}

seat('18C')
seat('18A')
seat('18F')
seat('18D')