
//ArrayDestructures:
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order(startIndex,mainIndex){
        return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
    }
}
//
const arr = [12,34,5,6];
const [e,r,t,y]=arr;//array destructuring
console.log(e,r,t,y);

//swap:

let [first,second]=restaurant.categories;
//console.log(first,second);
[first,second]=[second,first];
console.log(first,second);

//work with function:
let [value_1,value_2]=restaurant.order(2,1);
console.log(restaurant.order(2,1));
console.log(value_1,value_2);

//nested:

const [i,[j,k]]=[1,[5,6]];
console.log(i,j,k);

//default:

const [a=1,b=1,c=1]=[7,8];
console.log(a,b,c);
