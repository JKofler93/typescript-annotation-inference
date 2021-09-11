//                                            Arguments       Output
// Type annotations for functions =>  "(a: number, b: number): number"
//  Code we add to tell TS what type of arguments a function will receive and what type of values it will return 

// Type Inference for functions => 
// TS tries to figure out what type of value function will return 

const add = (a: number, b: number): number => {

  return a + b;

};

const subtract = (a: number, b: number): number => {

  return a - b;

};


function divide(a: number, b: number): number {
  
  return a / b;

}

const multiply = function (a: number, b: number): number {
  return a * b;
}




// Types VOID and NEVER

// For void is when the function does not return anything
// It can return "null" or "undefined"
const logger = (message: string): void => {

  console.log(message)

}

// Never means we are never going to do this function
// SUPER RARE, NEVER REALLY GOING TO BE USED
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
}




// ES2015 syntax DESTRUCTURING 
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({ date, weather }: {date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}


// ES2015 

logWeather(todaysWeather);