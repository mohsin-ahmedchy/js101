//Immediately invoked function:

//example-1

const solve_1 = function(){
    console.log('Normal solutin!');
}

solve_1();

//IIFE
(function(){
    console.log('IIFE solutin!');
})();

//
(function(a,b){
    console.log(a+b);
})(2,3);

//IIFE with arrow 
(()=> console.log('IIFE solutin!'))();