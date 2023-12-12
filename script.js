const arr = [1, 4, 8, -2, "Petras"];

console.log(typeof arr);
console.log(arr[0]);

const obj = {
  // JSON JavaScript object notation
  color: "red",
  name: "Petras",
  // ... neribotas
};

console.log(typeof arr);
console.log(obj["color"]);
console.log(obj.color);

const person = {
  firstname: "John",
  lastname: "Doe",
  age: 36,
  nationality: "British",
  isMarried: false,
  kids: ["Sara", "Boston"],
};

console.log(person.age);

const greetingText = `Hello, my name is ${person.firstname} ${
  person.lastname
} my age is ${person.age}, I am ${
  person.nationality
} and my kids are ${person.kids.join(", ")}. And I am ${
  person.isMarried ? "married" : "not married"
}. `;
console.log(greetingText);

// tuscio objekto sukurimas
const gyvunas = {};
gyvunas.animalType = "liutas";
console.log(gyvunas);

let laukas = "animaltype";
console.log(gyvunas[laukas]);
console.log(gyvunas["animalType"]);
console.log(gyvunas.animalType);

gyvunas.occupation = "valdyti";
console.log(gyvunas);

const dog = {
  // breed: "German Shepard",
  // name: "Angela",
  // age: 7,
  // colors: ["brown", "black"],
};

dog.breed = "German Shepard";
dog.name = "Angela";
dog.age = 7;
dog.colors = ["brown", "black"];
console.log(dog);

//  dinaminis savybiu paemimas
for (let property in dog) {
  console.log(`${property}: ${dog[property]}`);
}

const people = [
  { firstname: "Laura", lastname: "Gonzalez", age: 25, nationality: "Iraq" },
  {
    firstname: "Saulius",
    lastname: "Kreve",
    age: 38,
    nationality: "Lithuanian",
    isMarried: false,
  },
  { firstname: "John", lastname: "Schmit", age: 39, nationality: "Canadian" },
];

// kreipimasis i objektus masyve
console.log(people[1].firstname, people[1].lastname);

// objektu pasiemimas is masyvo per cikla
for (let person of people) {
  console.log(person.firstname, person.lastname);
}
