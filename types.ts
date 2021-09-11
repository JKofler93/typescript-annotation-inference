// Type: Easy way to refer to the different properties and functions that a values has.
// Types are used every where......


const today = new Date();
// type of properties the Date object has
today.getMonth();


const person = {
  age: 20
};
// name does not exist, TS will throw an error
// person.name

class Color {

}
// red wont have any properties because we haven't defined any in the the class Color object
const red = new Color();

