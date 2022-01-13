//rest pattern:
const [x,y,...others]=['ab','ac','ca','ba','bc','bd'];


//always need to use rest at the end.
console.log(x,y,others);
console.log(others);



//example:
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderBurger(main,...rest){
        console.log(main);
        console.log(rest);

    }

}

restaurant.orderBurger('tomato','bread','potato','chili paper')




//example:

const add =(...numbers)=>{
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
     sum+=numbers[i];}
     console.log(sum);
}


add(1,4,5);
add(3,4,5,6);
add(7,9,5,4,6,5,7);



