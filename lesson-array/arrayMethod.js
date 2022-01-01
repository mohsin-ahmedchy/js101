//1.
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

  //const total
  const {deposits,withdrawls} = accs.flatMap(mov=>mov.movements)
                .reduce((acc,mov)=>{
                   /* mov>0?(acc.deposits+=mov):(acc.withdrawls+=mov);
                    return acc;*/
                    //other solution:
                    acc[mov>0?'deposits':'withdrawls']+=Math.abs(mov);
                    return acc;

                },{deposits:0,withdrawls:0}) ;
 // console.log(total);
  console.log(deposits,withdrawls);

//2:

//convert: "my name is Mohsin AHMED and I live in sweDen."->"My Name Is Mohsin Ahmed and I Live in Sweden."

const convert = (value)=>{
    const exceptional = ['a','an','the','in','on','but','for','and','a.m','p.m','then'];
    return value.toLowerCase().split(' ').map(mov=> exceptional.includes(mov)?mov:mov[0].toUpperCase()+mov.slice(1)).join(" ");
}

console.log(convert('my name is Mohsin AHMED and I live in sweDen.'));
console.log(convert('i usually wake up at 8 a.m then i make my breakfast and finally i start my work.'));
  