const accountId = 123
let accountEmail = "test@gmail.com"
var accountPassword = 12345

let accountNumber;

accountEmail = "g@gmail.com"
accountEmail = "24"
accountPassword = 433121

/*
prefer not use the var 

becaue of issue in block scope and functional scope
*/
accountNumber = "12345"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountNumber])