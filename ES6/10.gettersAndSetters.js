// Use getters and setters to control access to an object:
console.log("       - Use getters and setters to control access to an object:");

// Use the class keyword to create a Thermostat class. The constructor 
// accepts a Fahrenheit temperature.

// In the class, create a getter to obtain the temperature in Celsius 
// and a setter to set the temperature in Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is 
// the value of temperature in Fahrenheit, and C is the value of the same 
// temperature in Celsius.

// Note: When you implement this, you will track the temperature inside 
// the class in one scale, either Fahrenheit or Celsius.

// This is the power of a getter and a setter. You are creating an API 
// for another user, who can get the correct result regardless of which 
// one you track.

// In other words, you are abstracting implementation details from the user.

class Thermostat {
    constructor(fahrenheit) {
        this._tempInCelsius = 5/9 * (fahrenheit - 32);
    }

    get temperature() {
        return this._tempInCelsius;
    }

    set temperature(celsius) {
        this._tempInCelsius = celsius;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale (constructor)

let temp = thermos.temperature; // 24.44 in Celsius (get)
console.log(`temp: ${temp}`);

thermos.temperature = 26; // (set)

temp = thermos.temperature; // 26 in Celsius (get)
console.log(`temp: ${temp}`);
