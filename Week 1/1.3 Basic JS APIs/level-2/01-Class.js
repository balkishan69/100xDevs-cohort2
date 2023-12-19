/*  CLASSES -> in which we put bunch of properties of a certain type together

const dog = {
  name: "doggie",
  legCount: 2.,
  speaks: "bhow bhow",
};

const cat = {
  name: "cat",
  legCount: 2,
  speaks: "meow meow",
};

function printStr(animal){
  console.log("animal "+animal["name"]+ " "+animal["speaks"]);
}

printStr(dog);   // dog and cat are the objects of the class Animal
printStr(cat);

*/

// CLASSES means structure(or blueprint) of something that's reusable and using  multiple places

//legCount, speak, name  -> these are attributes
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks;
  }
  static myType(){   // static method(or functions) is not associated to objects rather to class itself
    console.log("Animal")   // if u need to call something directly on the class then u have to make it static
  }
  speak(){   // functions on the objects
    console.log("hi there " + this.speaks);
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

console.log(Animal.myType())
// console.log(Animal.speak())    -> this won't work because speak is not a function at object, this speak() function can be called on the object of the class but not directly to the class

let dog = new Animal("dog", 4, "bhow bhow");   //creating objects into the class Animal
let cat = new Animal("cat", 4, "meow meow");
cat.speak();   //call function on the object


