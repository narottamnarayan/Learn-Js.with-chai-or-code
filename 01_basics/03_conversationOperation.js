let score = "narottam"


// console.log(typeof score);
// console.log(typeof(score));



let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN
//true => 1; false => 0


let isLoggedIn = "narottam"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 => ture; 0 => false
//"" => false
//"narottam" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log( typeof stringNumber);

//-----------------------objects;-------------

let str1 = "narottam"
let str2 = " narayan"

let str3 = str1 + str2

// console.log(str3)

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2); //javascript is preffer first 
// console.log(1 + 2 + "2");

// console.log((1 + 2) * 5 % 1);
// console.log(typeof ("2" + "3"));

// console.log( +true );
// console.log( +false );
// console.log( +"" );

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
 
let gameCounter = 100
// gameCounter++; //first print and then increment
++gameCounter;  // first increment and then print
console.log(gameCounter);