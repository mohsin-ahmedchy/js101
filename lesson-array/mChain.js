//Magic of chaining methods:

const movements = [-300,-800,500,900,-700,70,95,-89,500,3000,-50];

const interest = 1.5;

const movement = movements.filter(mov=>mov>0)
                 .map(mov=>mov*interest)
                 .reduce((acc,mov)=>acc+mov,0);

console.log(movement);