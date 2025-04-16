// two catogary in datatypes

// primitive datatypes

// total 7 - string, Number, Symbol, null, undefined, bigint, boolean

let employeeId = 123
let employeeName = "Gaurav"
let employee; // undefined
let employeeNum = Symbol(123);
let employeeNum2 = Symbol(123) // this both are not same that is good thing about symbol

console.log(employeeNum === employeeNum2) // not same false


console.log(employeeNum)

// Refrance Dataype(Non-Primitive)

// Array, Object, Function

const heroes = ["gaurav", "nandinee", "Mishra"]

const myObj = {
    name: "Gaurav",
    last: "mishra"
}

const myFun = function(){
    console.log("helow world")
}

console.log(heroes)

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/