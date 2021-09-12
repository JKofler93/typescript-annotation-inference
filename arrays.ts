// Working with arrays in TS is just like working with arrays in JS
// ONLY DIFFERENCE: Generally only put elements of the SAME TYPE in the array. 
// ["string","strings","string array"], [1,2,3,4]
// Can put different types in the same array but you must be very explicit about it, and use special type annotation

// When you hover over carMakers, TS inference will show you that it is an array of strings. "string[]"
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// If we initialize an empty array, we want to annotate with its expected type values
// const carMakers: string[] = [];

// If we initialize an array with values inside of it, the type annotation is not needed
// const carMakers = ['ford', 'toyota', 'chevy']

// We can also put complex values inside of an arrays
// If you hover over dates, type inference will be the Date type
const dates = [new Date(), new Date()];

// 2D arrays, 
//  We must double up on the annotation we make
// If we hover over carsByMake we get a 2D array of strings. "string[][]"
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// If the values were not there we would need to annotate it..
// const carsByMake: string[][] = [];


// Why do we care?

// 1) TS can do type inference when extracting values from an array
// Help with inference when extracting values
// If we hover over car, type inference will know that it is a string
const car = carMakers[0];
const myCar = carMakers.pop();


// 2) TS can prevent us from adding incompatible values to the arrays
// Prevent incompatible values
// if we hover over 100: Argument of type 'number' is not assignable to parameter of type 'string'.
// This is telling us we are trying to put a type of number, into an array of strings
carMakers.push(100);



// 3) We can get help with '.map', '.forEach', '.reduce' functions
// Help with '.map'
// When we put the . after car, we get all the methods that belong to strings
carMakers.map((car:string): string => {
  return car.toUpperCase();
});




// 4) Flexible - arrays can still contain multiple different types
// 
