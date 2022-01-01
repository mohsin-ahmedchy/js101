//calculate total sum:

const movements = [45,540,-670,87,-90,-340,600,700,80,1200];

const movement = movements.reduce((acc,mov,i)=>{
    console.log(`iteration ${i} : ${mov}`);

    return acc+mov;
},0);

console.log(movement);

//max or min:

const movement_1 = movements.reduce((acc,mov)=>{
    return (acc>mov)?acc:mov;//min:(acc<mov)
},movements[0]);

console.log(`max: ${movement_1}`);