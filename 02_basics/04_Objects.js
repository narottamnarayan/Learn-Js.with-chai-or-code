// const tinderuser = new Object()

const Tinderuser = {};

Tinderuser.id = "123abc"
Tinderuser.name = "narayan"
Tinderuser.isLoggedin = false

// console.log(tinderuser);
// console.log(Tinderuser);



const regularUser={
   email:"narayan@google.com",
   fullName: {
    userName:{
     firstname:"narottam",
     lastname:"narayan"
    }
   }
} 
//  console.log(regularUser.fullName.userName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 =Object.assign ({}, obj1,obj2)
const obj3 = {...obj1,...obj2} // sprad property//

// console.log(obj3);

const newObj = [
   {
      id:1,
      email:"n@google.com"
   },
   {
      id:2,
      email:"g@google.com"
   },
   {
      id:3,
      email:"p@google.com"
   }
]
 console.log(newObj[2].email);

 console.log(Object.keys(Tinderuser));
 console.log(Object.values(Tinderuser));
 console.log(Object.entries(Tinderuser));

 console.log(Tinderuser.hasOwnProperty("isLoggedin"));

