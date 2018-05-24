import Person from "./modules/Person";

class Adult extends Person{
  payTax(){
    console.log(this.name + " pays $23 in taxes.");
  }
}

var joe = new Person("Joe", "blue");

joe.greet();

var jane = new Adult("Jane", "pink");
jane.greet();
jane.payTax();
