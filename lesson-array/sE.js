
const movements = [-300,-800,500,900,-700,70,95,-89,500,3000,-50];

//some() method:

const move_1 = movements.some(acc=>acc>30);
console.log(move_1);

//every():

const move_2 = movements.every(acc=>acc<20);
console.log(move_2);