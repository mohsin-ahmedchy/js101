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
  
  const accs = [acc1, acc2, acc3];
//find method:
  const details = accs.find(mov=>mov.owner==='Mohsin');
  console.log(details);