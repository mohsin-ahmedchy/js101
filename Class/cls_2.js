//Try to less use setters and getters

//setters and getters:

const detail ={
    name:'Mohsin Ahmed',
    movements:[300,45,32,467,87],

    get value(){
       return this.movements.slice(-1).pop();
    },
    
    set value(mov){
        this.movements.push(mov);
    }
};

detail.hey = function(){
    console.log('Hellow Everyone!');
}
detail.hey();
console.log(detail.value);

detail.value = 50;
console.log(detail.movements);

//setters and getters with class:

class PersonCl{
    constructor(fullName,year){
        this.fullName = fullName;
        this.year = year;
    };

    get age(){
        return 2037-this.year;
    };

    set fullName(name){
        if(name.includes(' ')) this._fullName=name;//we use (_) because of error (fullName)
        else
        alert(`${name} is not a fullName.`)
    };
    static hey(){//static method
        console.log('Hellow Everyone!');
    }
}

const mohsin = new PersonCl('Mohsin Ahmed',1993);
//const moh = new PersonCl('Ahmed',1993);//alert part will work
console.log(mohsin.age);
console.log(mohsin);
PersonCl.hey();

