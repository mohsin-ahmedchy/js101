//String Methods:
const email_1 = 'mohsin1993@gmail.com';
const email_2 = ' Mohsin1993@Gmail.com ';

//toLowerCase()/toUpperCase()
const email = email_2.toLowerCase().trim();//trim()-remove all space.

console.log(email_1===email);

//replace():

const price = '10,000€';

const details = 'Hello,Hi,Hlw,Hellow';

console.log(price.replace('€','$').replace(',','.'));
console.log(details.replace(/,/g,'.'));//if we want to change common word(//g);

//includes():

const flight = 'Airline nm : RayAir';
console.log(flight.includes('nm'));

//startsWith():
console.log(flight.startsWith('nm'));

//endsWith():
console.log(flight.endsWith('Air'));

//example:

const check = (item)=>{
    const finalCheck = item.toLowerCase();
    if(finalCheck.includes('knife')||finalCheck.includes('liquid')){
        console.log('You are not allow onboard.')
    }
   else{
       console.log('You are welcome!')
   }
}
check('I have a Laptop,knife,book,Liquid etc.')
check('I have a Laptop,book etc.')
check('I have a Laptop,knife,book etc.')