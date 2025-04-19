let strVal1 = "Gaurav"
let strVal2 = "Mishra";
let ageVal = "25";

let strVal3 = `your full name is  ${strVal1} ${strVal2} and Age is ${ageVal}`

// We are going to see some operation function of string
let str = new String("gaurav")
let str1 = "your-name-is"

console.log(str1.split('-'))
console.log(str1.charAt(2))
console.log(str1.indexOf('u'))

function areEqualUppercase(st1,st2){
    return st1.toUpperCase() === st2.toUpperCase();
}

// const areEqualUppercase = (st1,st2) =>
//     st1.toUpperCase() === st2.toUpperCase();

console.log(areEqualUppercase('g','g'))


let v1 = "2 + 2"
let v2 = new String("2 + 2")
console.log(v1);
console.log(eval(v1));
console.log(eval(v2));
console.log(eval(v1.valueOf()));