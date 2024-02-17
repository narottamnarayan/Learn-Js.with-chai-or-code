// singleton
// Object.create


// object literals--------//
 const mySym = Symbol("key1")

const myUser = {
name:"narayan",
"full Name": "narottam narayan",
[mySym]:"mykey1",
age:23,
location:"bihar",
isLoggedin:false,
email:"narayan@google.com",
lastloginDate:["monday","saturday"]
}


// console.log(myUser.email);
// console.log(myUser["email"]);
// console.log(myUser["full Name"]);
// console.log( typeof myUser[mySym]); // symbol type defined,

myUser.email = "narottam@google.com"

// console.log(myUser.email);
// Object.freeze(myUser);

myUser.email = "narottam@gmail.com"
// console.log(myUser);

myUser.greeting = function(){
    console.log("hello jS User");
}

myUser.greetingtwo = function(){
    console.log(`hello jS User, ${this.name}`);
}

console.log(myUser.greeting());
console.log(myUser.greetingtwo());


