// functions accepting callback functions:

const firstChange = function(str){
    const [first,...rest] = str.split(' '); 

    return [first.toUpperCase(),...rest].join(' ');

}
const allChange = function(str){
    return str.replace(/ /g,''); 

}

const main = function(str,fn){//higher order function
    console.log(str);
    console.log(`Main result: ${fn(str)}`)
    console.log(`Function name: ${fn.name}`)
}

main('javaScript is the best web language!',firstChange);
console.log('---------')

main('javaScript is the best web language!',allChange);



//functions returing functions:

const intro = function(wel){
    return function(name){
        console.log(`${wel} ${name}`);
    }
}
intro('Hi')('Mohsin!');
intro('Hy')('Nadira!');