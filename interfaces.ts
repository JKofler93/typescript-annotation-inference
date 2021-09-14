// Interfaces: 
// Creates a new type, describing the property names and value types of an object

// When we create a interface we are creating a new type. 
// Creating a generic term, kind of like JSClass 
// inside of the interface, explain the properties the vehicle must have and their types
// To be a Vehicle, you must have... 'name' that is a string, 'year' that is a number. 'broken' that is a boolean
// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
// }

// Instead of having whats below, you can now have this..
// This means in order to call the printVehicle function, YOU MUST pass in an object that meets the ": Vehicle" interface. 
// It must have, 'name' that is a string, 'year' that is a number. 'broken' that is a boolean
// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken: ${vehicle.broken}`)
// };

// oldCivic passes the interface for a vehicle
// The keys can not be different and the values HAVE to be the same type 
// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true
// };

// This type annotation is really long and hard to read. How do we improve using an interface?
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken: ${vehicle.broken}`)
// };

// Type script did some things behind the scenes, it checked out the Vehicle interface
// printVehicle(oldCivic);


// Syntax around Interfaces
//  Not just held to primitive datatypes. We can have any type we want.
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  // What if we wanted a function?
  // Anything that wants to be a vehicle MUST have a function thats called "summary" that returns a string
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`
  }
};
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.summary}`)
};

printVehicle(oldCivic);