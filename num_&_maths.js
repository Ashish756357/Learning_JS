// const score = 400
// console.log(score);

// We have more method to this same as String

// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(2));


// const  pi = new Number(22.246343);
// console.log(pi.toPrecision(4));

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// ********Maths*******
//  Math is a built in object in javascript which has various methods associated with it.

// console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2)); // returns the smallest integer greater than or equal to a given number
console.log(Math.floor(4.7)); // returns the largest integer less than or equal to a given number
console.log(Math.min(4, 5, 3, 7, 10));
console.log(Math.max(4, 5, 3, 7, 10));

console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
