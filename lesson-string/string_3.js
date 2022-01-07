//String Method:

//split():string to array

console.log('My name is Mohsin'.split(' '));

//join():array to string
console.log(['My','name','is','Mohsin'].join(' '));

//example:

const nameCapitalization =(sentence)=>{
 const check = sentence.toLowerCase().split(' ');
 const newArray = [];
 check.forEach(mov => {
   // newArray.push( mov[0].toUpperCase()+mov.slice(1));
    //other solution:
    newArray.push( mov.replace(mov[0],mov[0].toUpperCase()));
 });
 console.log(newArray.join(' '));
} 

nameCapitalization('my name is mohsin');


//padding:

console.log('Mohsin'.padStart(20,'+'));
console.log('Mohsin'.padEnd(20,'+'));

//repeat():

const repNumber = (n)=>{
    console.log(`${'✈️'.repeat(n)}`);
}

repNumber(5);