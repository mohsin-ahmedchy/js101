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

//for..of loop:

const menu = [...restaurant.starterMenu];
//console.log(menu);

for(const [i,value] of menu.entries()){//using array destructuring
    console.log(`position ${i+1}: ${value}`);
}
//get both index and value we can use [.entries()]
