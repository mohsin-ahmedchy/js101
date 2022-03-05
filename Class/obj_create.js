//object.create():

const person = {
    age(){
      console.log(2037-this.year);
    },
    init(name,year){
        this.name=name;
        this.year=year;
    }
}

const mohsin = Object.create(person);
mohsin.init('Mohsin',1993);
mohsin.age();

const abir = Object.create(person);
abir.init('Abir',1992);
abir.age();