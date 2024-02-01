const accountId = 236712
let accountEmail = "narottam@google.com"
var accountPassword = "1223456"
accountCity = "jaipur"

let accountState;

// accountId = 234864 //this is not allowed

console.log(accountId)
    
accountEmail = "hc@hg.com"
accountPassword = "234765"
accountCity = "bengaluru"


/*
prefer not to use var
because of issue in block scope and functional scope (abcd)
*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])