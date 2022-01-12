//Object Destructuring:

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },


   //example:
   orderDelivery({time='23',startIndex=3,mainIndex=1,address}){
    console.log(`Please ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} delivery to ${address} at ${time} p.m`);
 }
    
  };
  /*
//solution_1:
  const {name,categories,mainMenu}=restaurant;
  console.log(name,categories,mainMenu);

//solution_2:  

  const{name:dataName,categories:cateName,mainMenu:mainName}=restaurant;
  console.log(dataName,cateName,mainName);

//default value:

  const {main=[],categories:cateName=[]}=restaurant;
  console.log(main,cateName);

//mutating variable:

  let a = 100;
  let b = 40;
  const obj = {a:10,b:4,c:7};
  ({a,b} = obj);//main mechanism
  console.log(a,b);

//Nested object:

  const {thu:{open:o,close:c}}=restaurant.openingHours;
  /*const {thu:{open,close}}=restaurant.openingHours;
    console.log(open,close);
   
  console.log(o,c);
*/
  //Example:
//test:1
  restaurant.orderDelivery({
     time:20,
     startIndex:1,
     mainIndex:2,
     address:'Armegatan 32A'

  });
  //test:2
  restaurant.orderDelivery({
    startIndex:2,
    address:'Armegatan 32C'

 })
 //test:3
 restaurant.orderDelivery({
    time :14,
    address:'Armegatan 32C'

 })
  