//object:

function details(name,age,job,address){
    this.name = name;
    this.age = age;
    this.job = job;
    this.address = address,
    this.display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.job);
        console.log(this.address);
    }
}

let student_1 = new details('Mohsin',28,'Software Engineer','25/sweden');
let student_2 = new details('Moin',27,'Software Engineer','21/sweden');
let student_3 = new details('sinha',38,'Software Engineer','15/sweden');

student_1.display();
student_2.display();
student_3.display();