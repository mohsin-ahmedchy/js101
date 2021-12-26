//Reverse():
const arr1=['a','b','c','d','f'];
console.log(arr1.reverse());

//concat():

const arr2 = ['m','j','h','i'];
console.log(arr2.concat(arr1));
console.log([...arr2,...arr1]);//other solution

//join():(array to string):

const arrTostr = arr1.join('/');
console.log(arrTostr);