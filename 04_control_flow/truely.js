const useremail = []

if(useremail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

// falsy value

// false, 0, -0, BigInt 0n, "", NaN, null, undefined

//truthy value
// true, "0", " ", 'false', [], {}, function(){},

// if(useremail.length === 0){
//     console.log("array is empty")
// }
const eptyObj = {}

if(Object.keys(eptyObj).length === 0){
    console.log("object is empty")
}
 // nullish  coalessring operator (??):null, undefined

 let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 10
//  val1 = undefined ?? 15
 val1 = null ?? 15 ?? 10

 console.log(val1);

 // terniary operator

 // condition ? true : false

 const iceteaprice = 100
 iceteaprice <= 80 ? console.log("price is less then 80") : console.log("price is more then 80")