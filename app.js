//Temperature in Kelvin
const kelvin = 293;

//Temperature in Celsius (conversion from Kelvin)
let celsius = kelvin - 273;

//Temperature in Fahrenheit (conversion from Celsius)
//Used Math.floor() method to round number to whole number
let fahrenheit = Math.floor(celsius * (9/5) + 32);