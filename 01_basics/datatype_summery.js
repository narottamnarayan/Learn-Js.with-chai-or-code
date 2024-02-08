// ----primitive------ //

// 7 type of data;

// String, Number, Boolean, BigInt, null, undefined, Symbol, 

const score = 100;
const scoreValue = 100.3

const isloggedin = false
const outsidetemp = null

let userEmail;

const id = Symbol("123")

const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 48168476874998287487128n

// console.log( typeof bigNumber);



// ----------------Reference type (Non-primitive)----------------//

// Array, Object, Function,

const heros = ["shaktiman", "doga" , "naagraj"]

 let myObj = {
    name: "narottam",
    age: 24,
}


 const myFunction =  function(){
    console.log("hello world")
 }
  
 console.log(typeof isloggedin);



//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++;
  
   //   stack(primitive data) and heap(non-primitive data)----//





let myname = "narottamnarayan"

let anothername = myname;
anothername = "gautamnarayan"



console.log(myname);
console.log(anothername);



let userone = {
   email: "abdc@google.com",
   upi : "user@ybl",
}
 
let usertwo = userone;

usertwo.email = "bhcd@gov.in"

console.log(userone.email);
console.log(usertwo.email);