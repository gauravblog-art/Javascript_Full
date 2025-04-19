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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) and Heap(Non-primitive)
// In Stack when we creat any veriable in stack and when you will going to change it will change in copy of that variable not actual value but in Heap that will refrance so that will also change in value.

                 // stack
let state = "mumbai"
let stateSecound = state
stateSecound = "delhi"
console.log(state);
console.log(stateSecound);

                // heap
let employeeInfo = {
    email: "gaurav@google.com",
    Name:"Gaurav"
}


let employeeInfo1 = employeeInfo
employeeInfo1.email = "Nandu@google.com";
console.log(employeeInfo.email);
console.log(employeeInfo1.email)


