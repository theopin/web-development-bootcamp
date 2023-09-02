const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

console.log(animals);

// Destructure array
const [cat, dog] = animals; // variable declared here cannot be used sub

// Destructure object - need to reference property name
//const { name, sound } = cat;

// Add custom variable name to reference attribute
const {
  name: catName,
  sound: soundName,
  feedingRequirements: { food, water }
} = cat;

// Add default value if object attribute was absent
const { name = "xo", sound = "purr", missing = "here" } = cat;

console.log(missing);

console.log(food);

//const [animal, makeSound] = useAnimals(cat);
//console.log(animal);
// makeSound();

export default animals;
export { useAnimals };
