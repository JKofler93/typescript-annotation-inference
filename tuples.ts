// What is a tuple? 
// Array-like structure where each element represents some property of a record. Mix and match many different types on them

// Object that represents a drink
// const cola = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40
// }

//  The loss of information in tht labels

//    1.      2.   3. 
// ['brown', true, 40]
// 1) String represents the color
// 2) Boolean represents carbonated
// 3) Number represents the sugar content

// The tuple has a FIXED ORDER!


const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};
// const pepsi: (string | number | boolean)[]
// dont want to swap order!
// Going to add an annotation to say its a tuple

//Another way of doing this above is doing a TYPE ALIAS
// This creates an idea of an tuple. 
type Drink = [string, boolean, number];

// Instead of doing whats below we can now do this..
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// after pepsi the annotation of ": [string, boolean, number]" gives us the understanding the meaning of the order of the array
// const pepsi: [string, boolean, number] = ['brown', true, 40];


// If we hover over pepsi[0], we get the error, "Type 'number' is not assignable to type 'string'" meaning we can not mess with the order of the tuple.
// pepsi[0] = 40;


// CSV file and represent a single row. Use case


// If we use a tuple to represent some meaningful data, its hard for us to look at those values and understand what we are trying to say.
const carSpecs: [number, number] = [400, 3354];

// It is easier with an object because of the key value pairs, we can see the key that represents the value.
// Model a record or record it, reach for an object instead of a tuple.
const carStats = {
  horsepower: 400,
  weight: 3354
};

// Why we care about tuples?


// When to use them? 
