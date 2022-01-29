//Map():

const rest = new Map();//empty map

//set():
rest
.set('name','Nuhat')
.set(1,'Panshi')
.set(2,'CupStory')
.set('open',10)
.set('close',22)
.set(true,'We are open!')
.set(false,'We are closed!');

//get():
console.log(rest.get('name'));

const time = 23;
console.log(rest.get(time>=rest.get('open') && time<=rest.get('close')));

//delete():

rest.delete(1);
console.log(rest);

//clear: rest.clear();

//has():

console.log(rest.has(2)); 

//size():

console.log(rest.size);

//keys(),values(),entries()
console.log(rest.entries());



//uses:

//solution:

const arr = [1,3];
rest.set(arr,'warning');
console.log(rest);

//console.log([1,3]);// it does not work as a key.

//solution:
console.log(rest.get(arr));

