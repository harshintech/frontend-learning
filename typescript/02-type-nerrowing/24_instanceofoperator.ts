class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);
animalSound(myCat);
