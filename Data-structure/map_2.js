//map():
const questions = new Map(
    [['question','What is the best programming language in the world?'],
    [1,'C++'],
    [2,'Java'],
    [3,'Python'],
    [4,'JavaScript'],
    [5,'R'],
    ['correct',4],
    [true,'Correct!'],
    [false,'Try Again!']]
);

console.log(questions);

let answer = 4;

console.log(questions.get('question'));

for(const [key,value] of questions){
    if(typeof key==='number')
        console.log(`${key} : ${value} `);
    
}

console.log(questions.get(questions.get('correct')===answer));


//map into array
console.log([...questions]);

//keys(),values(),entries()

console.log(questions.keys());//always use below techniqe:

console.log([...questions.keys()]);
console.log([...questions.values()]);