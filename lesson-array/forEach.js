//forEach():

const value = [-20,25,-456,87,98,65,-12,-32];

value.forEach((mov,i)=>{
    if(mov>0){
        console.log(`deposit ${i+1}: ${mov}`);
    }
    else{
        console.log(`withdrawl ${i+1}: ${Math.abs(mov)}`);
    }
})

//other solution with for-of loop:
console.log('-----');

for(const[i,val]of value.entries()){
    if(val>0){
        console.log(`deposit ${i+1}: ${val}`);
    }
    else{
        console.log(`withdrawl ${i+1}: ${Math.abs(val)}`);
    }
}