let num1 = 100
let num2 = new Number(100)

console.log(num1.toString().length) // 3
console.log(num2.toFixed(2))
// ++++++++++++++++ Math++++++++

console.log(Math)
console.log(Math.round(5.5));
console.log(Math.ceil(23.46));
console.log(Math.min(2,3,4,5))
console.log(Math.max(3,56,7,89,9));

console.log(Math.floor(Math.random()*10) + 1)

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)