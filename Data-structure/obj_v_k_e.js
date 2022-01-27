const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order(startIndex,mainIndex){
        return [this.starterMenu[startIndex],this.mainMenu[mainIndex]];
    },
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
  };
//object keys,values,entries:

  let days = ['mon','tues','wes','thu','fri','sat','sun'];

  let openHr_k = Object.keys(restaurant.openingHours);
  console.log(openHr_k);

  let openHr_v = Object.values(restaurant.openingHours);
  console.log(openHr_v);

  let openHr_e = Object.entries(restaurant.openingHours);
  console.log(openHr_e);

 for(const [key,{open,close}] of openHr_e){
     console.log(`we open ${openHr_k.length} days: ${key}.Open ${open} and Close ${close}`);
 }