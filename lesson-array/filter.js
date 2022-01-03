const movements = [45,540,-670,87,-90,-340,600,700,80,1200];
const interest = 1.4;

const movement= movements.filter((mov,i)=>{
    if(mov>0){
        console.log(`Position ${i+1} : deposit ${Math.ceil(mov*interest)}€`);
    }
    else{
        console.log(`Position ${i+1} : withdrawl ${Math.abs(mov)}€`);
    }
})
