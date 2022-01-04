//date:
//rules:new Date(year, month, day, hours, minutes, seconds, milliseconds)

const now = new Date();
console.log(now);//2022-01-04T14:47:33.381Z
console.log(Date.now());//1641307653388

const now_1 = new Date(0)
console.log(now_1);//1970-01-01T00:00:00.000Z

//get time:
const now_3 = new Date(2037,10,19,23,23);
console.log(now_3);
console.log(now_3.getFullYear());
console.log(now_3.getMonth());
console.log(now_3.getDate());
console.log(now_3.getHours());
console.log(now_3.getMinutes());
console.log(now_3.getDay());
console.log(now_3.getTime());
console.log(new Date(2142282180000));

console.log(new Date('december 24, 2015'));

//set time:
now_3.setDate(18)
now_3.setFullYear(2040);//const now_3 = new Date(2037,10,19,23,23);
console.log(now_3);


//3 types of JavaScript date input formats:

//1. JavaScript Short Dates:
console.log(new Date("03/25/2015"));

//2. ISO Dates (Date-Time):

console.log(new Date("2015-03-25T12:00:00Z"));

//3.JavaScript Long Dates:

console.log(new Date("Jan 25 2015"));