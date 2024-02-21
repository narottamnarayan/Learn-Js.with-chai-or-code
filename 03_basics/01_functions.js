
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
    //   console.log(userloggedin("narayan"))

//   const mytemp = userloggedin("narayan")
//   console.log(mytemp);


function calculatecarPrice(val1, val2, ...num1){
     return num1
}

// console.log(calculatecarPrice(200, 400, 500,2000,1000));

const user = {
    username: "narayan",
    price: 199
}

function handelObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`) 
}

const myobj = {
    username:"sam",
    price:399
}

// console.log(handelObject(myobj));

const myarr = [200,300,400,600,1000]

function returnsecondvalue(getArr){
   return getArr[3]
}

// console.log(returnsecondvalue(myarr));
console.log(returnsecondvalue([100,200,500,400]));

