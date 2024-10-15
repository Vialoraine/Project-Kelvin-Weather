//Temperature in Kelvin
const kelvin = 0;

//Temperature in Celsius (conversion from Kelvin)
let celsius = kelvin - 273;

//Temperature in Fahrenheit (conversion from Celsius)
//Used Math.floor() method to round number to whole number
let fahrenheit = Math.floor(celsius * (9/5) + 32);

//Answers
console.log(`The temperature is ${kelvin} degrees Kelvin.`)
console.log(`The temperature is ${celsius} degrees Celsius.`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)