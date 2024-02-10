const name = "narottam"

const repocount = 50

// console.log(name +  repocount + " narayan");

console.log(`hi i am ${name} this is my  first ${repocount}`);


// const gameName = "gta5"

// console.log(gameName);

const GameName = new String( "battale_ground_game");

// console.log(GameName.__proto__);

// console.log(GameName.length);

// console.log(GameName.toUpperCase());

console.log(GameName.charAt(4));

console.log(GameName.indexOf('g'));

const newGame = GameName.substring(0, 7);
console.log(newGame);

const anOthergame = GameName.slice(1, 6)
console.log(anOthergame);


 const otherGame = "   narayan  "
 console.log(otherGame);
 console.log(otherGame.trim());


 const url = "http//hitesh.com/hitesh%20chaudhary"

 console.log(url.replace('%20', '_'));
 console.log(url.includes('hitesh'));

 console.log(GameName.split("_"));