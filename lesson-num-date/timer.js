//setTimeout():
const ingradiant = ['spinach','potato'];

const timer = setTimeout((ing1,ing2)=>{
    console.log(`Made my pizza with ${ing1} and ${ing2}.`)
},3000,...ingradiant);//spred 

console.log('continue....');
if(ingradiant.includes('spin'))clearTimeout(timer);

//setInterval():
/*const timer = setInterval((ing1,ing2)=>{
    console.log(`Made my pizza with ${ing1} and ${ing2}.`)
},3000,'spinach','potato');*/