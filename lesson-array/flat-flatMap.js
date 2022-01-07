
const acc1 = {
    owner: 'Mohsin',
    movements: [-400, 3000, -650, 70, 1300],
    interestRate: 1.1, // %
    pin: 34,
  };
  
  const acc2 = {
    owner: 'Mujakkir',
    movements: [ 3400, -150, -790,  8500, -30],
    interestRate: 1.3,
    pin: 22,
  };
  
  const acc3 = {
    owner: 'Abir',
    movements: [200,-300, -20, 50, 400, -460],
    interestRate: 0.4,
    pin: 33,
  };
  
  //flat():
  const accs = [acc1, acc2, acc3];

  const accMovements = accs.map(acc=>acc.movements);
  console.log(accMovements);
  const fullMovements = accMovements.flat();
  const addMovements1 = fullMovements.reduce((acc,mov)=>acc+mov,0);

  console.log(addMovements1);

  //flatMap():

  const addMovements2 = accs.flatMap(acc=>acc.movements).reduce
  ((acc,mov)=>acc+mov,0);
  console.log(addMovements2);