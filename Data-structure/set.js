// Set(): specially we use Set() for unique values.

const name_1 = ['Moin','Mohsin','Jaber','Abir','Tasrik','Moin','Jaber'];

const uni_Name = new Set(name_1);
console.log(uni_Name);

//set properties:

//size:
console.log(uni_Name.size);

//has():

console.log(uni_Name.has('Abir'));

//add()

console.log(uni_Name.add('aminul'));

for(const nam of uni_Name){
    console.log(nam);
}

//delete():

console.log(uni_Name.delete('Moin'));
console.log(uni_Name);

//insert into a new array:
const value_N = [...new Set(uni_Name)];//using spread operator.
console.log(value_N);

//clear();-delete all value from set.

uni_Name.clear();
console.log(uni_Name);