//spread:(three dots) with array

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderPizza(ing1,ing2,ing3){
        console.log(`Please make my pizza with ${ing1},${ing2} and ${ing3}`);
    }
    
}

const arr = [1,2,3,4];
console.log([7,8,...arr]);
console.log(...arr);
console.log(...restaurant.categories);


//join two array value :
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//Example:

const ingredients = ['mashroom','apple','tomato'];
restaurant.orderPizza(...ingredients);
//console.log(ingredients);


//object:

const restaurant_1 = {founder:'Mohsin',...restaurant,year:2011};

console.log(restaurant_1);