let goat = {
  name: "Goat",
  age: 7,
  mass: 12,
  catchPhrase: function (repeats) {
    let phrase = "LaunchCode";
    for (let i = 0; i < repeats; i++) {
      phrase += " Rocks";
    }
    return phrase;
  },
};

console.log(
  `${goat.name} is ${goat.age} years old and has a mass of ${goat.mass} kg.`
);
console.log(`${goat.name} says, "${goat.catchPhrase(3)}."\n\n`);

//Try adding new properties inside constructor.
class Astronaut {
  constructor(name, age, mass) {
    this.name = name;
    this.age = age;
    this.mass = mass;
  }
}

let fox = new Astronaut("Fox", 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = "red";

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.
