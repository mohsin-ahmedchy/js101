//optional chaining:(?.)

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


  let days = ['mon','tues','wes','thu','fri','sat','sun'];

  for(const day of days){
      const open = restaurant.openingHours[day]?.open??'closed';
     // console.log(day);
      console.log(`${day},we will open at ${open}.`)
  }
  //console.log(restaurant.openingHours.thu.open);

  //insead of error we get undefined
  //console.log(restaurant.openingHours.mon?.open);

  //method:

  console.log(restaurant.order?.(0,1)||'method invalid');

  //array with optional chaining:
  const users = [
    {
        name:'Mohsin',
        email:'mohsin@gmail.com'
    }
    
    ]
    console.log(users[0]?.name??'invalid');