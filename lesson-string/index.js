//chatAt():

const data = 'Mohsin';

console.log(data.charAt(2));


//switch:

let word = prompt('enter the letter:');


switch(word){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
              console.log('vowel');
              break;
 
      default:
              console.log('consonant');
}