//Array number with sorting:
const ages = [23,56,98,54,32,6,9,76];

//ascending order:

const sorted_1_Age=ages.sort((a,b)=>a-b);
console.log(sorted_1_Age);

//descending order:
const sorted_2_Age=ages.sort((a,b)=>b-a);
console.log(sorted_2_Age);

//Array string with sorting:
const name_1 = ['Mohsin','Tasneem','Abir','Aminul','Mirja','Jaber'];

console.log(name_1.sort());

