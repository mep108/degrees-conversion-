//defining kelvin
const kelvin = 313;

//finding value of celsius
let celsius = kelvin - 273;

//finding value of F
let fahrenheit = celsius * (9/5) + 32;

let newton = celsius * (33/100);

//math.floor rounds down to the nearest whole number 
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);
celsius = Math.floor(celsius);
fahrenheit = Math.floor(fahrenheit);

console.log(`the temperature is ${celsius} degrees celsius.`);
console.log(`the temperature is ${newton} degrees newton.`);
console.log(`the temperature is ${fahrenheit} degrees fahrenheit.`);
console.log(`the temperature is ${kelvin} degrees kelvin.`);

