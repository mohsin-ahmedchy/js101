//fill():

const arr = [1,2,3,4,5];
console.log(arr.fill(1,2));//fill(value,startIndex)
console.log(arr.fill(2,1,3));//fill(value,startIndex,endIndex)

//Array.from():

const y = Array.from({length:7},()=>3);// 7 length array with all value 3.
console.log(y);

const z = Array.from({length:4},(value,i)=>i+1);//we can use(_) insted of value. 
console.log(z);