//date substraction
const displayDays = (day1,day2)=>{
    return Math.abs((day2-day1)/(1000*60*60*24));//(ns*s*m*h)
}

const calcDays = displayDays(new Date(2022,01,22),new Date(2022,01,06));
console.log(calcDays);

//

const date = new Date(2035,10,4,10,34);
console.log(+date);// convert date number(+/Number());