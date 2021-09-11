//  Type Annotation: Code we as developers add to tell Typescript what type of value a variable will refer to.


// Type annotation of ": number"
let apples: number = 5;

// Type annotation of ": string"
let speed: string = 'fast';

// Type annotation of ": boolean"
let hasName: boolean = true;

// Type annotation of ": null", the same value of its type
let nothingMuch: null = null;

// Type annotation of ": undefined", the same value of its type
let nothing: undefined = undefined;

// built in objects 
// Type annotation of ": Date"
let now: Date = new Date();


// Type annotation for an ARRAYs
// Type annotation of ": string[]", which is saying, we have an array[] that will contain strings 
let colors: string[] = ['red', 'green', 'blue'];

// Type annotation of ": number[]", which is saying, we have an array[] that will contain numbers 
let muNumbers: number[] = [1,2,3];

// Type annotation of ": boolean[]", which is saying, we have an array[] that will contain booleans 
let truths: boolean[] = [true, true, false];





// Type annotations for Classes

class Car {

}
// Want to make an instance of type Car
// when you see a ": Car", you are referring to an instance of a car, or a class
// lower case car refers to an instance of a car
let car: Car = new Car();



// Object literal
// in {}, tell typescript the key: then the type of value it will have followed by a semicolon ; 
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}





// Type annotations for functions
// What we care about is...
// 1. What arguments are going into the function? (i: number)
// 2. What types we expect the function to return?  => void
// This is the annotation, description of a function    (i: number) => void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};




// Type inference changes if the the variable is not declared on the same line

let number;
number = 5

// When do we rely on type inference?
// pretty much anytime we define a variable inline
let nameString = "My name" // type string



// When do we use Type Annotation?

// 1) When a function return the 'any' type.
// - 'any' type is just like any types, string, number
// - TS has no idea what this is, cant check for correct property references 
// AVOID variables with the 'any' type AT ALL COSTS!!

const json = '{"x": 10, "y":20}';
// if you hover over coordinates, you get the 'any' type 
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates) // {x: 10, y: 20};



// 2) When we declare a variable on one line and initialize it later...

let words = ['red', 'green', 'blue'];
// Loop through words and if we find 'green' set foundWord to true...
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {

  if (words[i] === 'green') {

    foundWord = true;

  }
  
}


// 3) When we have a variable to have a type that CAN NOT be inferred

let numbers = [-10, -1, -12]
// this variable could be a boolean or a number...
let numberAboveZero: boolean | number = false;

// Loop over numbers to see if there is a number above 0 
for (let i = 0; i < numbers.length; i++) {

  if (numbers[i] > 0) {

    numberAboveZero = numbers[i];

  }
  
}




