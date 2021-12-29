
//forEach with Map():

const currency = new Map([
    ['BDT','Bangladesh'],
    ['SEK','Sweden'],
    ['EURO','Finland'],
    ['USD','USA'],
    ['RUPI','India']
]);

currency.forEach((value,key,map)=>{
 console.log(`${value}'s currency name: ${key}`);
})

//forEach with set():

const currencyName = new Set(['USD','EURO','BDT','SEK','CD','AUD','USD','EURO']);

//console.log(currencyName);Always take unique values


currencyName.forEach((value,_,map)=>{
    console.log(`${value}: ${value}`);
})

