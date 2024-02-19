
function saymyname(){
    console.log("N");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// saymyname()

// function addTwonumbers(num1,num2){
//      console.log( num1 + num2);
// }

function addTwonumbers(num1, num2){
    //  let result = num1 +num2
    // //  console.log("narayan")
    //  return result

    return num1 + num2

}

   const result = addTwonumbers(4,6)

//    console.log("result:", result);



function userloggedin(username = "naro"){
    if(!username){
        console.log("please enter your username")
         return
    }
     return `${username} just logged in`
}
// console.log(userloggedin("narayan"))
      console.log(userloggedin("narayan"))

//   const mytemp = userloggedin("narayan")
//   console.log(mytemp);