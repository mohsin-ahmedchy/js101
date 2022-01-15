//nullish:
//we use nullish when we need the value [0,''];


/*
const value = 0;
const result = value || 'js';
console.log(result);//result is 'js',but instead of 'js' we need '0';
*/

//(??) is the solution for get value [0]
const value = '';
const result_2 = value ?? 'js';
console.log(result_2);
