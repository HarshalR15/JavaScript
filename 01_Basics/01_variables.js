const accountId = 144553
let accountEmail = "harshal@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2 //not allowed
accountEmail = "h@gmail.com"
accountPassword = "123213"
accountCity = "Bhopal"
let accountState ;

console.log(accountId);
/*
  prefer not to use var 
  becuase of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])