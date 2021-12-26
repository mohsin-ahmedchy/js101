//Array string with sort:

const friends = ['Mohsin','Abir','Shumon','Tasneem','Iskandar','Mujakkir',
'Xaber','Moin'];
console.log(friends.sort());

//Array number with sort:

const ages = [13,45,5,6,87,43,23,16,51];

//Ascending order:

const asAge = ages.sort((a,b)=>a-b);
console.log(asAge);

//Descending order:

const deAge = ages.sort((a,b)=>b-a);
console.log(deAge);

//other solution 1:1(ascending):
const otherSolution = ages.sort((a,b)=>{
    if(a>b)return 1;
    //if(a<b)return -1;
    else return -1
})
console.log(otherSolution);

//other solution 1:2(descending):
const otherSolution_1 = ages.sort((a,b)=>{
    if(a>b)return -1;
    if(a<b)return 1;
    //else return 1;
})
console.log(otherSolution_1);